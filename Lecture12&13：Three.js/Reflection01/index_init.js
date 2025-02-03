import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js"; // 引入軌道控制器
import { GLTFLoader } from "https://unpkg.com/three@latest/examples/jsm/loaders/GLTFLoader"; // 引入 GLTF 加載器
import { RectAreaLightHelper } from "https://unpkg.com/three@latest/examples/jsm/helpers/RectAreaLightHelper.js"; // 引入矩形燈輔助工具
import { RectAreaLightUniformsLib } from "https://unpkg.com/three@latest/examples/jsm/lights/RectAreaLightUniformsLib.js"; // 引入矩形燈光庫

// TODO: 創建場景
const scene = new THREE.Scene();

// TODO: 創建透視攝影機
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.zoom = 0.4; // 設定鏡頭縮放比例
camera.updateProjectionMatrix(); // 更新鏡頭設定
camera.position.set(7, 15, 20); // 設定攝影機位置

// TODO: 創建 WebGL 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true }); // 啟用抗鋸齒
renderer.setSize(window.innerWidth, window.innerHeight); // 設定渲染器尺寸為視窗大小
document.body.appendChild(renderer.domElement); // 將渲染器附加到 HTML 頁面
renderer.toneMapping = THREE.ACESFilmicToneMapping; // 設定色調映射，使光影更自然
renderer.shadowMap.enabled = true; // 啟用陰影效果

// TODO: 創建環境背景球體 (HDRI 環境貼圖)
const sphereGeometry = new THREE.SphereGeometry(50, 30, 30); // 創建球體幾何體
const hdriPath = "https://storage.googleapis.com/umas_public_assets/michaelBay/day19/model/Warehouse-with-lights.jpg"; // HDRI 貼圖 URL
const texture = await new THREE.TextureLoader().loadAsync(hdriPath); // 加載 HDRI 貼圖
const sphereMaterial = new THREE.MeshStandardMaterial({
	side: THREE.BackSide, // 讓內部可見，作為環境
	color: 0xcceeff, // 設定背景色 (淺藍)
	map: texture, // 設定 HDRI 貼圖
});
// TODO: 創建球體物件
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 0, 0); // 設定球體位置
scene.add(sphere); // 添加球體到場景中

// TODO: 新增環境光
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 3); // 創建環境光 (白色, 強度 3)
	scene.add(light); // 添加環境光到場景中
};

// TODO: 新增點光源
const addPointLight = (x, y, z) => {
	const pointLight = new THREE.PointLight(0xffffff, 1); // 創建點光源 (白色, 強度 1)
	scene.add(pointLight); // 添加點光源到場景
	pointLight.position.set(x, y, z); // 設定光源位置
	pointLight.castShadow = true; // 讓點光源投射陰影

	// 🔍 可選：新增輔助工具來可視化光源
	const lightHelper = new THREE.PointLightHelper(pointLight, 10, 0xffff00); // 點光源輔助工具 (黃色)
	// scene.add(lightHelper); // 預設不顯示
	lightHelper.update(); // 更新輔助工具
};

// TODO: 創建軌道控制器 (讓攝影機可拖曳旋轉)
const control = new OrbitControls(camera, renderer.domElement);
control.target.set(0, 2, 3); // 設定控制目標點
control.update(); // 更新控制器

// TODO: 添加光源到場景
addAmbientLight(); // 添加環境光
addPointLight(10, 18, -10); // 添加點光源 1
addPointLight(10, 18, 10); // 添加點光源 2

// TODO: 動畫渲染
function animate() {
	requestAnimationFrame(animate); // 設定動畫循環
	renderer.render(scene, camera); // 渲染場景與攝影機
}
animate();
