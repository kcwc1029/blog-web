import * as THREE from "three"; // 導入 Three.js 核心模組
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js"; // 導入軌道控制器模組，用於鏡頭移動和縮放
import { GLTFLoader } from "https://unpkg.com/three@latest/examples/jsm/loaders/GLTFLoader"; // 導入 GLTF 加載器模組，用於載入 3D 模型
import { RectAreaLightHelper } from "https://unpkg.com/three@latest/examples/jsm/helpers/RectAreaLightHelper.js"; // 導入光源輔助器模組
import { RectAreaLightUniformsLib } from "https://unpkg.com/three@latest/examples/jsm/lights/RectAreaLightUniformsLib.js"; // 導入矩形光源的庫，增強光照效果

// TODO: 創建場景
const scene = new THREE.Scene();

// TODO: 創建攝影機
const camera = new THREE.PerspectiveCamera(
	20, // 視角(FOV)
	window.innerWidth / window.innerHeight, // 寬高比（螢幕寬高）
	0.1, // 近剪裁面
	100 // 遠剪裁面
);
camera.zoom = 0.4; // 設定鏡頭縮放倍率
camera.updateProjectionMatrix(); // 更新投影矩陣，使縮放有效
camera.position.set(5, 5, 10); // 設置鏡頭在場景中的位置

// TODO: 創建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias: true 表示開啟抗鋸齒
// UPDATE: 在render上開啟shadow功能
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight); // 設置渲染器尺寸為視窗大小
document.body.appendChild(renderer.domElement); // 將渲染器的 DOM 元素添加到 HTML 文件中
renderer.toneMapping = THREE.ACESFilmicToneMapping; // 設置色調映射，提升場景的視覺效果

// TODO: 創建環境背景（大球體模擬天空或背景）
const sphereGeometry = new THREE.SphereGeometry(50, 30, 30); // 創建球體幾何體，半徑為 50
const planeMaterial = new THREE.MeshStandardMaterial({
	side: THREE.BackSide, // 使用背面（反轉的面）作為可見部分
	color: 0xcceeff, // 設置顏色為淺藍色
});
const sphere = new THREE.Mesh(sphereGeometry, planeMaterial); // 將幾何體與材質結合形成網格體
sphere.position.set(0, 0, 0); // 將球體置於場景中心
scene.add(sphere); // 將球體添加到場景中

// TODO: 載入 3D 模型（GLTF 格式）
new GLTFLoader().load("https://storage.googleapis.com/umas_public_assets/michaelBay/file.gltf", (gltf) => {
	gltf.scene.traverse((object) => {
		if (object.isMesh) {
			object.material.roughness = 1; // 設定材質粗糙度
			object.material.metalness = 0; // 設定材質金屬感
			object.material.transparent = false; // 使材質不透明
			// UPDATE: 讓物體可以產生陰影，同時上也能蒙上陰影到物件
			object.castShadow = true; // 使物件能產生陰影
			object.receiveShadow = true;
		}
	});
	scene.add(gltf.scene); // 將載入的模型添加到場景中
});

// TODO: 添加聚光燈
const addSpotLight = () => {
	const spotLight = new THREE.SpotLight(0xffffff, 50); // 創建聚光燈，顏色為白色，強度為 50
	spotLight.position.set(3, 3, 0); // 設定聚光燈的位置
	// UPDATE: 在光源上啟用陰影
	spotLight.castShadow = true;
	scene.add(spotLight); // 將聚光燈添加到場景中
};

// TODO: 添加環境光
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 1); // 創建環境光，顏色為白色，強度為 1
	scene.add(light); // 將環境光添加到場景中
};

// TODO: 創建軌道控制器
const control = new OrbitControls(camera, renderer.domElement); // 創建軌道控制器，控制鏡頭旋轉和縮放
control.target.set(0, 2, 3); // 設置控制器的目標點
control.update(); // 更新控制器

// TODO: 呼叫添加光源的函數
addSpotLight(); // 添加聚光燈
addAmbientLight(); // 添加環境光

// TODO: 動畫循環
function animate() {
	requestAnimationFrame(animate); // 每一幀重複調用 `animate` 函數
	renderer.render(scene, camera); // 渲染場景與攝影機
}
animate();
