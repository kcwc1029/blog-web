import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// TODO: 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";
import { SVGLoader } from "https://unpkg.com/three@latest/examples/jsm/loaders/SVGLoader.js";

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

// TODO: 處理path
// SVG來源：https://storage.googleapis.com/umas_public_assets/michaelBay/day17/taiwan.svg
const loadPathsFromSvg = async () => await new SVGLoader().loadAsync("./taiwan.svg");
(async () => {
	const svgData = await loadPathsFromSvg(); // 獲取 SVG 的幾何資訊
	const paths = svgData.paths; // 取得 SVG 內的路徑資料 (paths)
	// console.log(paths);
	const group = new THREE.Group();
	paths.forEach((path) => {
		// 透過 SVGLoader.createShapes 解析 path，將其轉換為可建立 3D 幾何的 shape
		const shapes = SVGLoader.createShapes(path);
		// 設定材質，這裡使用 MeshStandardMaterial (標準材質，可受光照影響)
		const material = new THREE.MeshStandardMaterial();
		// 處理每個 shape，建立對應的 3D 物件
		shapes.forEach((shape) => {
			// UPDATE: 處理畫面卡頓
			// 將 shape 轉換成 3D 立體幾何 (ExtrudeGeometry)
			// const geometry = new THREE.ExtrudeGeometry(shape);
			// 用材質 (material) 和幾何 (geometry) 建立 3D 物件 (mesh)
			const geometry = new THREE.ExtrudeGeometry(shape, {
				steps: 1,
				bevelEnabled: false,
			});
			const mesh = new THREE.Mesh(geometry, material);
			group.add(mesh);
		});
	});
	// 將完整的 group (包含所有區塊) 加入場景 (scene)
	scene.add(group);
})();

// TODO: 處理每一楨
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

animate();
