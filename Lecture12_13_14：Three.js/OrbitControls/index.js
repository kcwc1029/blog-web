import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// TODO: 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// TODO: 建立scene
const scene = new THREE.Scene();
// TODO: 建立camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 15); // 修改鏡頭位置
// TODO: 建立renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 設定渲染器的寬高
new OrbitControls(camera, renderer.domElement); // 實例化OrbitControls，帶入鏡頭與渲染器的DOM元素
document.body.appendChild(renderer.domElement); // 將渲染器生成的canvas加入html的body

// TODO: 建立天球
const skyGeometry = new THREE.SphereGeometry(100, 50, 50); // 天球的半徑與細分數
const skyTexture = new THREE.TextureLoader().load("./starmap_4k.jpeg"); // 匯入天球材質
const skyMaterial = new THREE.MeshStandardMaterial({
	map: skyTexture,
	side: THREE.DoubleSide, // 材質應用於內外面
});
const skySphere = new THREE.Mesh(skyGeometry, skyMaterial); // 建立天球
scene.add(skySphere); // 將天球加入場景

// TODO: 建立地球
const earthGeometry = new THREE.SphereGeometry(5, 50, 50); // 地球的半徑與細分數
const earthTexture = new THREE.TextureLoader().load("./2k_earth_daymap.jpeg"); // 匯入地球材質
const earthMaterial = new THREE.MeshStandardMaterial({
	map: earthTexture,
	side: THREE.DoubleSide, // 材質應用於內外面
});
const earth = new THREE.Mesh(earthGeometry, earthMaterial); // 建立地球
scene.add(earth); // 將地球加入場景

// TODO: 新增光源
const light = new THREE.AmbientLight(0xffffff, 1); // 環境光顏色與強度
scene.add(light); // 將光源加入場景

// TODO: 宣告鏡頭觀察點
const cameraLookAt = new THREE.Vector3(10, 0, 0); // 鏡頭觀察的目標位置
camera.lookAt(cameraLookAt); // 設定鏡頭的觀察目標
let rotation = 0; // 宣告旋轉變數

// TODO: 動畫函式
function animate() {
	requestAnimationFrame(animate); // 每幀呼叫自身進行動畫更新
	renderer.render(scene, camera); // 渲染場景與鏡頭
}
// TODO: 動畫起始點
animate();
