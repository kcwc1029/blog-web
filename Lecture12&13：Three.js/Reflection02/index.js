import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@latest/examples/jsm/loaders/GLTFLoader";
import { Reflector } from "https://unpkg.com/three@latest/examples/jsm/objects/Reflector"; // 引入反射鏡面

// TODO: 建立場景
const scene = new THREE.Scene();

// TODO: 設置反射鏡面 (Reflector)
let options = {
	clipBias: 0.03, // 調整反射的距離，避免Z-fighting（閃爍）
	textureWidth: 1024, // 反射紋理的寬度
	textureHeight: 1024, // 反射紋理的高度
	color: 0x889999, // 反射顏色濾鏡
	recursion: 4, // 反射光線反彈的次數
};

// TODO: 創建地板的平面幾何
const geometry = new THREE.PlaneGeometry(20, 20, 1, 1);

// TODO: 創建 Reflector，並使用 `options` 設定
let mirror = new Reflector(geometry, options);
mirror.rotation.x = Math.PI * -0.5; // 旋轉成水平地板
scene.add(mirror);

// TODO: 建立攝影機
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.zoom = 0.4; // 設定縮放倍率
camera.updateProjectionMatrix();
camera.position.set(7, 15, 20); // 設定攝影機位置

// TODO: 建立 WebGL 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping; // 影像色調對映
renderer.shadowMap.enabled = true; // 開啟陰影計算

// TODO: 建立環境貼圖（HDRI 環境）
const sphereGeometry = new THREE.SphereGeometry(50, 30, 30);
const hdriPath = "https://storage.googleapis.com/umas_public_assets/michaelBay/day19/model/Warehouse-with-lights.jpg";
const texture = await new THREE.TextureLoader().loadAsync(hdriPath); // 載入 HDRI 貼圖
const sphereMaterial = new THREE.MeshStandardMaterial({
	side: THREE.BackSide,
	color: 0xcceeff,
	map: texture,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// TODO: 新增環境光
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 3); // 白色環境光，強度 3
	scene.add(light);
};

// TODO: 新增點光源
const addPointLight = (x, y, z) => {
	const pointLight = new THREE.PointLight(0xffffff, 1000); // 點光源，亮度 1000
	scene.add(pointLight);
	pointLight.position.set(x, y, z);
	pointLight.castShadow = true; // 啟用陰影

	// 可選擇是否加入輔助工具（開啟會看到光源範圍）
	// const lightHelper = new THREE.PointLightHelper(pointLight, 10, 0xffff00);
	// scene.add(lightHelper);
};

// TODO: 設定軌道控制器 (OrbitControls)
const control = new OrbitControls(camera, renderer.domElement);
control.target.set(0, 2, 3);
control.update();

// TODO: 呼叫光源函式，新增環境光和兩個點光源
addAmbientLight();
addPointLight(10, 18, -10);
addPointLight(10, 18, 10);

// TODO: 載入 3D 模型 (GLTFLoader)
let cabinet; // 宣告變數，儲存機櫃模型
(async () => {
	const path = "./rack3.glb";
	const gltf = await new GLTFLoader().loadAsync(path);
	cabinet = gltf.scene;
	cabinet.scale.set(0.5, 0.5, 0.5); // 設定模型縮放比例
	scene.add(cabinet);
})();

// TODO: 動畫渲染函式
function animate() {
	requestAnimationFrame(animate); // 讓畫面持續更新
	renderer.render(scene, camera);
	// 讓 3D 機櫃模型旋轉
	if (cabinet) {
		cabinet.rotation.y += 0.01;
	}
}
animate();
