import * as THREE from "three";
// TODO: 匯入滑鼠控制鏡頭的模組
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";
// TODO: 匯入GLTF模型載入器
import { GLTFLoader } from "https://unpkg.com/three@latest/examples/jsm/loaders/GLTFLoader";
// TODO: 匯入矩形光源的輔助工具
import { RectAreaLightHelper } from "https://unpkg.com/three@latest/examples/jsm/helpers/RectAreaLightHelper.js";
// TODO: 匯入矩形光源的uniform設定庫
import { RectAreaLightUniformsLib } from "https://unpkg.com/three@latest/examples/jsm/lights/RectAreaLightUniformsLib.js";

// TODO: 建立場景
const scene = new THREE.Scene();

// TODO: 建立攝影機
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 100);
// 設定攝影機縮放
camera.zoom = 0.4;
camera.updateProjectionMatrix(); // 更新攝影機的投影矩陣
camera.position.set(5, 5, 10); // 設定攝影機的位置

// TODO: 建立渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true }); // 開啟抗鋸齒
renderer.setSize(window.innerWidth, window.innerHeight); // 設定渲染器的寬高
document.body.appendChild(renderer.domElement); // 將渲染器生成的canvas加入html
renderer.toneMapping = THREE.ACESFilmicToneMapping; // 設定HDR色調映射
renderer.shadowMap.enabled = true; // 啟用陰影功能

// TODO: 建立一個大的球體模擬天空背景
const sphereGeometry = new THREE.SphereGeometry(50, 30, 30); // 大球體幾何，模擬背景天空
const planeMaterial = new THREE.MeshStandardMaterial({
	side: THREE.BackSide, // 只渲染球體內部
	color: 0xcceeff, // 背景顏色
});
const sphere = new THREE.Mesh(sphereGeometry, planeMaterial);
sphere.position.set(0, 0, 0); // 設定球體位置
scene.add(sphere); // 將球體加入場景

// TODO: 載入GLTF模型
new GLTFLoader().load("https://storage.googleapis.com/umas_public_assets/michaelBay/file.gltf", (gltf) => {
	gltf.scene.traverse((object) => {
		if (object.isMesh) {
			// 設定材質與陰影
			object.material.roughness = 1; // 粗糙度
			object.material.metalness = 0; // 金屬度
			object.material.transparent = false; // 不透明
			object.castShadow = true; // 可投射陰影
			object.receiveShadow = true; // 可接收陰影
		}
	});
	scene.add(gltf.scene); // 將模型加入場景
});

// TODO: 新增點光
const addPointLight = () => {
	const pointLight = new THREE.PointLight(0xffffff, 20); // 點光源，設定顏色與強度
	scene.add(pointLight);
	pointLight.position.set(1, 2.5, 0); // 設定點光源位置
	pointLight.castShadow = true; // 啟用陰影

	// 加入點光源輔助工具
	const lightHelper = new THREE.PointLightHelper(pointLight, 1, 0xffff00); // 半徑為1，黃色
	scene.add(lightHelper);
	lightHelper.update(); // 更新輔助工具的位置
};

// TODO: 新增平行光
const addDirectionalLight = () => {
	const directionalLight = new THREE.DirectionalLight(0xffffff, 5); // 平行光，設定顏色與強度
	directionalLight.position.set(5, 2, 0); // 設定光源位置
	scene.add(directionalLight);
	directionalLight.castShadow = true; // 啟用陰影

	const d = 10; // 定義陰影範圍
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;

	// 加入輔助工具
	const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 10, 0xffff00);
	scene.add(lightHelper); // 若需要顯示輔助工具，可以取消註解
	directionalLight.target.position.set(0, 0, 0); // 設定目標點
	directionalLight.target.updateMatrixWorld(); // 更新目標點的世界矩陣
	lightHelper.update(); // 更新輔助工具
};

// TODO: 新增聚光燈
const addSpotLight = () => {
	const spotLight = new THREE.SpotLight(0xffffff, 50); // 聚光燈，設定顏色與強度
	spotLight.position.set(0, 3, 0); // 設定光源位置
	spotLight.castShadow = true; // 啟用陰影
	scene.add(spotLight); // 加入場景
};

// TODO: 新增矩形光
const addRectAreaLight = () => {
	const width = 10; // 矩形光寬度
	const height = 10; // 矩形光高度
	const rectLight = new THREE.RectAreaLight(0xffffff, 1, width, height); // 設定顏色與亮度
	rectLight.position.set(5, 5, 0); // 設定位置
	rectLight.lookAt(0, 0, 0); // 設定目標方向
	scene.add(rectLight); // 加入場景

	// 加入輔助工具
	const rectLightHelper = new RectAreaLightHelper(rectLight);
	rectLight.add(rectLightHelper); // 將輔助工具加入光源
};

// TODO: 新增半球光
const addHemisphereLight = () => {
	const hemisphereLight = new THREE.HemisphereLight(0xffff99, 0x9999ff, 2.5); // 上方與下方光的顏色
	scene.add(hemisphereLight); // 加入場景
};

// TODO: 新增環境光
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 2); // 設定顏色與強度
	scene.add(light); // 加入場景
};

// TODO: 初始化滑鼠控制
const control = new OrbitControls(camera, renderer.domElement);
control.target.set(0, 2, 3); // 設定控制目標位置
control.update(); // 更新控制

// 新增不同類型的光源
// addSpotLight();
// addPointLight();
// addDirectionalLight();
// addAmbientLight();
// addRectAreaLight();
addHemisphereLight();

// TODO: 動畫函式
function animate() {
	requestAnimationFrame(animate); // 每一幀呼叫自身
	renderer.render(scene, camera); // 渲染場景
}
animate(); // 啟動動畫
