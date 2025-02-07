import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// TODO: 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// TODO: 建立場景（Scene）
const scene = new THREE.Scene(); // 場景是3D物件的容器
// TODO: 建立攝影機（Camera）
const camera = new THREE.PerspectiveCamera(
	75, // 視角的角度（越大視角越廣）
	window.innerWidth / window.innerHeight, // 視窗寬高比
	0.1, // 最近可以看到的距離
	1000 // 最遠可以看到的距離
);
camera.position.set(0, 0, 15); // 設定攝影機的位置，讓它遠離中心點，方便觀察物體

// TODO: 建立渲染器（Renderer）
const renderer = new THREE.WebGLRenderer(); // 使用WebGL進行渲染
renderer.setSize(window.innerWidth, window.innerHeight); // 設定渲染器的寬度和高度為視窗大小
document.body.appendChild(renderer.domElement); // 將渲染器生成的canvas加入到HTML的body中

// TODO: 增加滑鼠控制鏡頭（OrbitControls）
const control = new OrbitControls(camera, renderer.domElement); // 實例化OrbitControls，讓滑鼠可以控制攝影機

// TODO: 建立天空球體
const geometry = new THREE.SphereGeometry(100, 50, 50); // 球體幾何，半徑為100，水平和垂直切割面數量為50
const texture = new THREE.TextureLoader().load("./starmap_4k.jpeg"); // 載入星空材質
const material = new THREE.MeshStandardMaterial({
	map: texture, // 設定材質的貼圖
	side: THREE.DoubleSide, // 材質雙面可見
});
const sphere = new THREE.Mesh(geometry, material); // 建立球體物件
scene.add(sphere); // 將球體加入場景

// TODO: 新增環境光
const light = new THREE.AmbientLight(0xffffff, 1); // 白色光，亮度為1
scene.add(light); // 將光源加入場景

// TODO: 建立地球
const earthGeometry = new THREE.SphereGeometry(5, 50, 50); // 地球幾何，半徑為5
const earthTexture = new THREE.TextureLoader().load("./2k_earth_daymap.jpeg");
const earthMaterial = new THREE.MeshStandardMaterial({
	map: earthTexture, // 設定材質的貼圖
	side: THREE.DoubleSide, // 材質雙面可見
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial); // 建立地球物件
earth.position.set(20, 0, 0); // 將地球移動到(x: 20, y: 0, z: 0)的位置
scene.add(earth); // 將地球加入場景

// TODO: 建立太陽
const sunGeometry = new THREE.SphereGeometry(5, 50, 50); // 太陽幾何，半徑為5
const sunTexture = new THREE.TextureLoader().load("./2k_sun.jpeg"); // 載入太陽材質
const sunMaterial = new THREE.MeshBasicMaterial({
	map: sunTexture, // 設定材質的貼圖
	side: THREE.DoubleSide, // 材質雙面可見
});
const sun = new THREE.Mesh(sunGeometry, sunMaterial); // 建立太陽物件
scene.add(sun); // 將太陽加入場景

// TODO: 新增點光源（模擬太陽光）
const pointLight = new THREE.PointLight(0xffffff, 600); // 白色點光源，亮度為600
scene.add(pointLight); // 將點光源加入場景

// TODO: 新增點光輔助工具（用於可視化光源位置）
const pointlightHelper = new THREE.PointLightHelper(pointLight, 8, 0xffff00); // 輔助工具大小為20，顏色為黃色
scene.add(pointlightHelper); // 將輔助工具加入場景
pointlightHelper.update(); // 更新輔助工具位置

// TODO: 動畫函式（每幀都會更新畫面）
function animate() {
	requestAnimationFrame(animate); // 每次畫面更新時，呼叫自己形成迴圈
	renderer.render(scene, camera); // 渲染場景與攝影機
}

// TODO: 啟動動畫
animate();
