import * as THREE from "three";
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@latest/examples/jsm/loaders/GLTFLoader";
import { RectAreaLightHelper } from "https://unpkg.com/three@latest/examples/jsm/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "https://unpkg.com/three@latest/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { Reflector } from "https://unpkg.com/three@latest/examples/jsm/objects/Reflector";
import { UnrealBloomPass } from "https://unpkg.com/three@latest/examples/jsm/postprocessing/UnrealBloomPass";

// TODO: 建立場景 (Scene)
const scene = new THREE.Scene();

// TODO: 建立透視鏡頭 (Perspective Camera)
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.zoom = 0.4; // 設定鏡頭縮放比例
camera.updateProjectionMatrix(); // 更新鏡頭投影矩陣
camera.position.set(7, 15, 20); // 設定鏡頭位置

// TODO:  建立渲染器 (Renderer)
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight); // 設定渲染器大小為視窗大小
document.body.appendChild(renderer.domElement); // 將渲染器的畫布加入網頁中
renderer.toneMapping = THREE.ACESFilmicToneMapping; // 設定 Tone Mapping（色彩映射）
renderer.shadowMap.enabled = true; // 啟用陰影

// TODO: 加入四根柱子
const addCube = (w, h, d, color, side) => {
	const geo = new THREE.BoxGeometry(w, h, d); // 創建立方體幾何形狀
	const mat = new THREE.MeshStandardMaterial({ color: color, side: side }); // 創建材質
	const mesh = new THREE.Mesh(geo, mat); // 建立網格
	scene.add(mesh); // 將網格加入場景
	return mesh; // 回傳網格
};

// TODO: 標註四根柱子位置
const column1 = addCube(4, 50, 4, 0x22222f, THREE.FrontSide);
column1.position.set(-25, 0, -35); // 設定柱子1的位置
const column2 = addCube(4, 50, 4, 0x22222f, THREE.FrontSide);
column2.position.set(25, 0, -35); // 設定柱子2的位置
const column3 = addCube(4, 50, 4, 0x22222f, THREE.FrontSide);
column3.position.set(25, 0, 35); // 設定柱子3的位置
const column4 = addCube(4, 50, 4, 0x22222f, THREE.FrontSide);
column4.position.set(-25, 0, 35); // 設定柱子4的位置

// TODO: 定義機櫃與 AGV 變數
let cabinet; // 機櫃模型
let agv; // AGV（自動導引車）模型
let agvLight; // AGV 的燈光

// TODO: 新增機櫃
const addCabinetRow = () => {
	return new Array(18).fill(0).map((o, i) => {
		const clone = cabinet.clone(); // 複製機櫃模型
		const gap = Math.floor(i / 6); // 計算間隔
		clone.position.set(0, 0, i * 4.2 + gap * 15 + 2); // 設定機櫃位置
		scene.add(clone); // 將機櫃加入場景
		return clone; // 回傳機櫃
	});
};

// TODO: 新增機櫃列
const addCabinetColumn = (count) => {
	const row = addCabinetRow(); // 新增一行機櫃
	row.forEach((cabinet) => {
		const gap = Math.floor(count / 2) * 15; // 計算間隔
		cabinet.translateX(6 * count + gap - 45); // 移動機櫃位置
		cabinet.translateZ(-50); // 移動機櫃位置
		const lookPX = count % 2 === 0; // 判斷是否面向正X方向
		if (lookPX) {
			cabinet.rotateY(Math.PI); // 旋轉機櫃
		}
	});
};

// TODO: 加入機櫃模型
const addCabinetModels = async () => {
	const path = "./rack3.glb"; // 機櫃模型路徑
	const gltf = await new GLTFLoader().loadAsync(path); // 載入模型
	cabinet = gltf.scene; // 取得模型場景
	gltf.scene.traverse((object) => {
		if (object.isMesh) {
			object.material.map = null; // 移除材質貼圖
			object.material.color = new THREE.Color(0xffffff); // 設定材質顏色
			object.material.normalMap = null; // 移除法線貼圖
			object.castShadow = true; // 啟用陰影投射
			object.receiveShadow = true; // 啟用陰影接收
		}
	});
	cabinet.scale.set(0.35, 0.35, 0.35); // 縮放模型
	new Array(8).fill(0).map((o, count) => {
		addCabinetColumn(count); // 新增機櫃列
	});
};

// TODO: 加入 AGV 模型
const addAgvModels = async () => {
	const path = "./agv_example.glb"; // AGV 模型路徑
	const gltf = await new GLTFLoader().loadAsync(path); // 載入模型
	agv = gltf.scene; // 取得模型場景
	const lightMesh = gltf.scene.getObjectByName("AGV_MM_ForkLift_Light_0"); // 取得燈光網格
	const pointLight = addPointLight(19, 28, 60, 0x4444ff); // 新增點光源
	gltf.scene.traverse((object) => {
		if (object.isMesh) {
			object.castShadow = true; // 啟用陰影投射
			object.receiveShadow = true; // 啟用陰影接收
		}
	});
	agv.scale.set(0.047, 0.047, 0.047); // 縮放模型
	scene.add(agv); // 將 AGV 加入場景
	lightMesh.add(pointLight); // 將燈光加入 AGV
	agvLight = pointLight; // 儲存燈光
};

// TODO: 載入機櫃與 AGV
(async () => {
	await addCabinetModels(); // 載入機櫃模型
	await addAgvModels(); // 載入 AGV 模型
})();

// TODO: 新增環境光
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 0.1); // 創建環境光
	scene.add(light); // 將環境光加入場景
};

// TODO: 新增點光源
const addPointLight = (x, y, z, color = 0xffffff) => {
	const pointLight = new THREE.PointLight(color, 1000); // 創建點光源
	scene.add(pointLight); // 將點光源加入場景
	pointLight.position.set(x, y, z); // 設定點光源位置
	pointLight.castShadow = true; // 啟用陰影投射
	pointLight.shadow.bias = -0.001; // 設定陰影偏移
	return pointLight; // 回傳點光源
};

// TODO: 建立鏡頭控制
const control = new OrbitControls(camera, renderer.domElement);
control.target.set(0, 2, 3); // 設定鏡頭目標
control.update(); // 更新鏡頭控制

// TODO: 初始化光源
addAmbientLight(); // 新增環境光
addPointLight(16, 18, -10); // 新增點光源1
addPointLight(4, 18, 10); // 新增點光源2

// TODO: 動畫函數
let fadingReflectorOptions = {
	mixBlur: 2,
	mixStrength: 1.5,
	resolution: 512,
	blur: [0, 0],
	minDepthThreshold: 0.7,
	maxDepthThreshold: 2,
	depthScale: 2,
	depthToBlurRatioBias: 2,
	mirror: 0,
	distortion: 2,
	mixContrast: 2,
	reflectorOffset: 0,
	bufferSamples: 8,
};

// TODO: 新增平面
const addPlane = (w, h) => {
	const geo = new THREE.PlaneGeometry(w, h, 1, 1); // 創建平面幾何形狀
	const mat = new THREE.MeshStandardMaterial(); // 創建材質
	const mesh = new THREE.Mesh(geo, mat); // 建立網格
	mesh.receiveShadow = true; // 啟用陰影接收
	scene.add(mesh); // 將網格加入場景
	return mesh; // 回傳網格
};

// TODO:  新增地面
const fadingGround = addPlane(120, 120);
fadingGround.rotateX(Math.PI * -0.5); // 旋轉地面

// TODO: 新增牆壁
const fadingWallZN = addPlane(120, 30);
fadingWallZN.translateY(15); // 移動牆壁位置
fadingWallZN.translateZ(-59); // 移動牆壁位置

const fadingWallZP = addPlane(120, 30);
fadingWallZP.translateY(15); // 移動牆壁位置
fadingWallZP.translateZ(59); // 移動牆壁位置
fadingWallZP.rotateY(Math.PI); // 旋轉牆壁

const fadingWallXN = addPlane(120, 30);
fadingWallXN.translateY(15); // 移動牆壁位置
fadingWallXN.rotateY(Math.PI * 0.5); // 旋轉牆壁
fadingWallXN.translateZ(-59); // 移動牆壁位置

const fadingWallXP = addPlane(120, 30);
fadingWallXP.translateY(15); // 移動牆壁位置
fadingWallXP.translateX(59); // 移動牆壁位置
fadingWallXP.rotateY(Math.PI * -0.5); // 旋轉牆壁

// TODO: 更新 AGV 位置
const updateAvgPosition = (agv, time) => {
	// 計算 AGV 的 Z 軸位置
	const zRoute = Math.cos(time) * 30;
	// 設定 AGV 位置
	agv.position.set(0, 0, zRoute);
};

// TODO: 閃爍燈光
const flickerLight = (time, light) => {
	if (time % 1 < 0.5) {
		light.visible = true; // 燈光可見
	} else {
		light.visible = false; // 燈光不可見
	}
};

let time = 0; // 時間變數
// TODO: 鏡頭跟隨 AGV
const cameraFollowAvg = () => {
	const length = agv.position.distanceTo(camera.position); // 計算鏡頭與 AGV 的距離
	if (length > 20) {
		const distance = new THREE.Vector3(0, 0, 0).subVectors(camera.position, agv.position); // 計算距離向量
		distance.normalize(); // 正規化距離向量
		distance.multiplyScalar(20); // 設定固定距離
		distance.add(agv.position); // 加上 AGV 位置
		distance.setY(15); // 固定鏡頭高度
		distance.add(new THREE.Vector3(1, 0, 2)); // 設定鏡頭偏移
		camera.position.lerp(distance, 0.1); // 平滑移動鏡頭
	}
};

// TODO: 鏡頭看向 AGV
const cameraLookAtAgv = () => {
	control.target.set(...agv.position.toArray()); // 設定鏡頭目標為 AGV 位置
	control.update(); // 更新鏡頭控制
};

// TODO: 滑鼠移動事件
const mouseOnNdc = new THREE.Vector3(0, 0, -1); // 滑鼠在 NDC 座標中的位置
renderer.domElement.addEventListener("mousemove", (event) => {
	const mouseX = event.offsetX; // 滑鼠 X 位置
	const w = renderer.domElement.width; // 畫布寬度
	const mouseY = event.offsetY; // 滑鼠 Y 位置
	const h = renderer.domElement.height; // 畫布高度
	mouseOnNdc.setX(mouseX / w - 0.5); // 轉換為 NDC 座標
	mouseOnNdc.setY(-mouseY / h + 0.5); // 轉換為 NDC 座標
});

// TODO: 更新滑鼠影響的鏡頭目標
let idealTarget = new THREE.Vector3(0, 0, 0); // 理想目標
let lerpingTarget = new THREE.Vector3(0, 0, 0); // 漸變目標
let mouseOnWorld = new THREE.Vector3(0, 0, -1); // 滑鼠在世界座標中的位置
const updateMouseAffectTarget = () => {
	mouseOnWorld = mouseOnNdc.clone().unproject(camera); // 將 NDC 轉換為世界座標
	// 計算滑鼠與鏡頭的向量
	const mouseOnWorldToCamera = new THREE.Vector3().subVectors(mouseOnWorld, camera.position).normalize();
	idealTarget.addVectors(mouseOnWorldToCamera.multiplyScalar(10), agv.position); // 計算理想目標
	lerpingTarget.lerp(idealTarget, 0.1); // 漸變目標
	control.target.set(...lerpingTarget.toArray()); // 設定鏡頭目標
	control.update(); // 更新鏡頭控制
};

// TODO: 動畫循環
function animate() {
	requestAnimationFrame(animate); // 請求下一幀
	renderer.render(scene, camera); // 渲染場景
	if (agv) {
		time += 0.01; // 更新時間
		updateAvgPosition(agv, time); // 更新 AGV 位置
		flickerLight(time, agvLight); // 閃爍燈光
		cameraFollowAvg(); // 鏡頭跟隨 AGV
		cameraLookAtAgv(); // 鏡頭看向 AGV
		updateMouseAffectTarget(); // 更新滑鼠影響的鏡頭目標
	}
}
animate(); // 啟動動畫
