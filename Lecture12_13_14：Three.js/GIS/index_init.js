import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// TODO: 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// TODO: 建立scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf2f2f2);
// TODO: 建立camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(250, -250, 300); // 修改鏡頭位置
// TODO: 建立renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器負責投影畫面在螢幕上，會需要寬高
new OrbitControls(camera, renderer.domElement); // 帶入鏡頭跟renderer.domElement實例化它即可
document.body.appendChild(renderer.domElement); // 渲染器會產生canvas物件，我們在html的body放置它

// TODO: 新增環境光
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 0.6);
	scene.add(light);
};

// TODO: 新增平行光
const addDirectionalLight = () => {
	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
	directionalLight.position.set(20, 20, 20);
	scene.add(directionalLight);
	directionalLight.castShadow = true;
	const d = 10;
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;
};

addAmbientLight();
addDirectionalLight();

// TODO: 處理每一楨
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate();
