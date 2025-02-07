import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// TODO: 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// TODO: 建立scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf2f2f2);
// TODO: 建立camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 30, 30);

// TODO: 建立renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// TODO: 滑鼠控制鏡頭：在camera, renderer宣後之後加上這行
const control = new OrbitControls(camera, renderer.domElement);
control.target.set(0, 0, 0);
control.update();

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

// TODO: 增加球體
const addSphere = () => {
	const geo = new THREE.SphereGeometry(5, 50, 50);
	// 球體的顏色是用MeshBasicMaterial去完成
	const mat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
	const mesh = new THREE.Mesh(geo, mat);
	scene.add(mesh);
	return mesh;
};

addAmbientLight();
addDirectionalLight();
addSphere();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();
