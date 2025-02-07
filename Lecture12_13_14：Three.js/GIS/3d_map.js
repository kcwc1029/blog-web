import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// TODO: 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";
import { SVGLoader } from "https://unpkg.com/three@latest/examples/jsm/loaders/SVGLoader.js";

// 假設要呈現資料如下
const data = [
	{ rate: 14.2, name: "雲嘉" },
	{ rate: 32.5, name: "中彰投" },
	{ rate: 9.6, name: "南高屏" },
	{ rate: 9.7, name: "宜花東" },
	{ rate: 21.6, name: "北北基" },
	{ rate: 3.4, name: "桃竹苗" },
	{ rate: 9.0, name: "澎湖" },
];

// TODO: 建立scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf2f2f2);
// TODO: 建立camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(400, -400, 400); // 修改鏡頭位置
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
	const directionalLight = new THREE.DirectionalLight(0xffffff);
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
		// FIXED: 處理各地區顏色
		// 設定材質，這裡使用 MeshStandardMaterial (標準材質，可受光照影響)
		// const material = new THREE.MeshStandardMaterial();
		const color = path.color;
		const material = new THREE.MeshStandardMaterial({ color });

		// 處理每個 shape，建立對應的 3D 物件
		shapes.forEach((shape) => {
			// NOTE: 從SVG中抓取個地區的顏色跟名稱，在跟自行建立的data進行name比較，進而取出對應的rate
			const color = path.color;
			const parentName = path.userData.node.parentNode.id;
			const name = path.userData.node.id || parentName;
			// 抓到ID值之後，對照數據資料
			const dataRaw = data.find((raw) => raw.name === name);
			if (!dataRaw) return;
			console.log(dataRaw.rate);
			// FIXED: 處理畫面卡頓
			// const geometry = new THREE.ExtrudeGeometry(shape);
			const geometry = new THREE.ExtrudeGeometry(shape, {
				depth: -dataRaw.rate,
				steps: 1,
				bevelEnabled: false,
			});
			const mesh = new THREE.Mesh(geometry, material);
			// FIXED: 台灣顛倒
			group.rotateX(Math.PI); // 旋轉3D物件即可
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
