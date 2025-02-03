import * as THREE from "three"; // 引入 Three.js 核心模組
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

// TODO: 創建環境背景球體 (HDRI 貼圖)
const sphereGeometry = new THREE.SphereGeometry(50, 30, 30); // 創建球體幾何體
const texture = await new THREE.TextureLoader().loadAsync("./Warehouse-with-lights.jpg"); // HDRI 貼圖 URL
const sphereMaterial = new THREE.MeshStandardMaterial({
	side: THREE.BackSide, // 讓內部可見，作為環境
	color: 0xcceeff, // 設定背景色 (淺藍)
	map: texture, // 設定 HDRI 貼圖
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial); // 創建球體物件
sphere.position.set(0, 0, 0); // 設定球體位置
scene.add(sphere); // 添加球體到場景中

// TODO: 新增平行光源 (Directional Light)
const addDirectionalLight = () => {
	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // 創建平行光 (白色, 強度 0.8)
	directionalLight.position.set(20, 20, 20); // 設定光源位置
	scene.add(directionalLight); // 添加光源到場景
	directionalLight.castShadow = true; // 啟用投射陰影

	// 設定陰影相機的範圍
	const d = 10;
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;
};

// TODO: 新增環境光
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 3); // 創建環境光 (白色, 強度 3)
	scene.add(light); // 添加環境光到場景中
};

// TODO: 創建軌道控制器 (讓攝影機可拖曳旋轉)
const control = new OrbitControls(camera, renderer.domElement);
control.target.set(0, 2, 3); // 設定控制目標點
control.update(); // 更新控制器

// TODO: 添加光源到場景
addDirectionalLight(); // 添加平行光
addAmbientLight(); // 添加環境光

// TODO: 宣告 倒影攝影機 (CubeCamera)
let cubeCamera;
// TODO: 使用 GLTFLoader 載入 3D 模型
(async () => {
	const path = "./HDD Model.glb";
	const gltf = await new GLTFLoader().loadAsync(path); // 加載 GLTF 模型

	// 遍歷模型的所有子物件
	gltf.scene.traverse((object) => {
		if (object.name !== "pCube2") return; // 只對 `pCube2` 物件應用反射
		// 創建 倒影的渲染對象
		const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
			generateMipmaps: true, // 生成 Mipmap 貼圖，提高反射效果
			minFilter: THREE.LinearMipmapLinearFilter, // 線性過濾，讓反射效果更平滑
		});
		// 創建 立方體攝影機 (CubeCamera)，用於捕捉環境倒影
		cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
		// 設定物件的環境貼圖 (envMap) 為剛剛創建的倒影貼圖
		object.material.envMap = cubeRenderTarget.texture;
		object.add(cubeCamera); // 將攝影機綁定到該物件
		// 設定材質特性
		object.material.roughness = 0; // 讓表面更光滑，強化倒影
		object.material.metalness = 0; // 設定為 0，使其更適合玻璃或塑料反射
	});
	scene.add(gltf.scene); // 將載入的模型添加到場景中
})();

// TODO: 動畫渲染函式 (每幀更新畫面)
function animate() {
	requestAnimationFrame(animate); // 設定動畫循環
	renderer.render(scene, camera); // 渲染場景與攝影機
	if (cubeCamera) {
		cubeCamera.update(renderer, scene); // 更新倒影攝影機，使反射動態變化
	}
}
animate();
