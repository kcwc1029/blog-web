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
renderer.setSize(window.innerWidth, window.innerHeight); // 渲染器負責投影畫面在螢幕上，會需要寬高
new OrbitControls(camera, renderer.domElement); // 帶入鏡頭跟renderer.domElement實例化它即可
document.body.appendChild(renderer.domElement); // 渲染器會產生canvas物件，我們在html的body放置它

// TODO: 新增環境光：環境光提供整體亮度，不會產生陰影
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 0.5); // 設定白光，強度為 0.5
	scene.add(light);
};
// TODO: 新增點光：點光源會從特定點向四面八方發光
const addPointLight = () => {
	const pointLight = new THREE.PointLight(0xffffff, 1);
	scene.add(pointLight);
	pointLight.position.set(10, 10, -10);
	pointLight.castShadow = true;
};
// TODO: 新增平行光：平行光類似太陽光，所有光線方向相同，會產生陰影
const addDirectionalLight = () => {
	const directionalLight = new THREE.DirectionalLight(0xffffff, 4); // 設定白光，強度為 4
	directionalLight.position.set(0, 0, 10); // 設定光源位置
	scene.add(directionalLight);
	directionalLight.castShadow = true; // 讓平行光產生陰影

	// 設定陰影範圍
	const d = 8;
	directionalLight.shadow.camera.left = -d;
	directionalLight.shadow.camera.right = d;
	directionalLight.shadow.camera.top = d;
	directionalLight.shadow.camera.bottom = -d;
	// 設定光的目標位置 (聚焦點)
	directionalLight.target.position.set(0, 0, 0);
	directionalLight.target.updateMatrixWorld();
};

// TODO: 新增地球 (Earth)
const addEarth = () => {
	const earthGeometry = new THREE.SphereGeometry(5, 50, 50); // 創建球體，半徑 5，細分 50x50
	const earthTexture = new THREE.TextureLoader().load("./earthmap1k.jpg"); // 匯入材質
	earthTexture.encoding = THREE.sRGBEncoding;
	// 設定球體材質 (MeshStandardMaterial)
	const earthMaterial = new THREE.MeshStandardMaterial({
		map: earthTexture,
		side: THREE.DoubleSide,
	});
	// 建立球體網格並加入場景
	const earth = new THREE.Mesh(earthGeometry, earthMaterial);
	scene.add(earth);
	earth.position.set(0, 0, 0);
};

// TODO: 新增星空背景 (Skydome)
const addSkydome = () => {
	// 透過一個超大球體，貼上星空紋理，並設為內部渲染
	const skydomeTexture = new THREE.TextureLoader().load("./star_sky_hdri_spherical_map_with_galaxy2.jpg");
	skydomeTexture.encoding = THREE.sRGBEncoding;
	// 設定星空材質，使用 MeshBasicMaterial (不受光影影響)
	const skydomeMaterial = new THREE.MeshBasicMaterial({ map: skydomeTexture, side: THREE.DoubleSide });
	const skydomeGeometry = new THREE.SphereGeometry(100, 50, 50);
	const skydome = new THREE.Mesh(skydomeGeometry, skydomeMaterial);
	scene.add(skydome);
};

// TODO: 每一幀，場景物件都會被鏡頭捕捉
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

// TODO: 主程式
const main = () => {
	addPointLight(); // 點光源
	addAmbientLight(); // 環境光
	addDirectionalLight(); // 平行光
	addEarth(); // 地球模型
	addSkydome(); // 星空背景
	animate();
};
main();
