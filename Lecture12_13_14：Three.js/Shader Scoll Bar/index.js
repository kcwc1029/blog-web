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

// TODO: 增加球體
const addSphere = () => {
	const geo = new THREE.SphereGeometry(5, 50, 50);
	const vertex = document.getElementById("vertexShader").innerHTML;
	const fragment = document.getElementById("fragmentShader").innerHTML;
	const mat = new THREE.ShaderMaterial({
		vertexShader: vertex,
		fragmentShader: fragment,
		uniforms: {
			uIntensity: {
				value: 0.5, // 先給一個預設值
			},
		},
	});
	const mesh = new THREE.Mesh(geo, mat);
	scene.add(mesh);
	return mesh;
};

//TODO: 監聽scroll bar調整
document.getElementById("intensity").addEventListener("input", (event) => {
	// console.log(+event.target.value)
	console.log(sphere.material.uniforms.uIntensity.value);
	sphere.material.uniforms.uIntensity.value = +event.target.value;
});

// 實例化
const sphere = addSphere();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
animate();
