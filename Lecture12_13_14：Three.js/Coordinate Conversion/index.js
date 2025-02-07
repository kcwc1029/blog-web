import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// TODO: 定義城市資料
const cities = [
	{ name: "--- 請選擇城市 ---", id: 0, lat: 0, lon: 0, country: "None" },
	{ name: "孟買", id: 1356226629, lat: 19.0758, lon: 72.8775, country: "印度" },
	{ name: "莫斯科", id: 1643318494, lat: 55.7558, lon: 37.6178, country: "俄羅斯" },
	{ name: "廈門", id: 1156212809, lat: 24.4797, lon: 118.0819, country: "中國" },
	{ name: "金邊", id: 1116260534, lat: 11.5696, lon: 104.921, country: "柬埔寨" },
	{ name: "芝加哥", id: 1840000494, lat: 41.8373, lon: -87.6862, country: "美國" },
	{ name: "布里奇波特", id: 1840004836, lat: 41.1918, lon: -73.1953, country: "美國" },
	{ name: "墨西哥城", id: 1484247881, lat: 19.4333, lon: -99.1333, country: "墨西哥" },
	{ name: "卡拉奇", id: 1586129469, lat: 24.86, lon: 67.01, country: "巴基斯坦" },
	{ name: "倫敦", id: 1826645935, lat: 51.5072, lon: -0.1275, country: "英國" },
	{ name: "波士頓", id: 1840000455, lat: 42.3188, lon: -71.0846, country: "美國" },
	{ name: "台中", id: 1158689622, lat: 24.15, lon: 120.6667, country: "台灣" },
];

// TODO: 建立 HTML 下拉選單
const citySelect = document.getElementsByClassName("city-select")[0];
// TODO: 渲染下拉選單
citySelect.innerHTML = cities.map((city) => `<option value="${city.id}">${city.name}</option>`).join("");

// TODO: 建立場景
const scene = new THREE.Scene();

// TODO: 建立相機
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 15); // 設定相機初始位置

// TODO: 建立渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // 將渲染器的 canvas 加入 HTML

// TODO: 加入滑鼠控制
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // 啟用阻尼效果，讓操作更平滑

// TODO: 環境光（提供整體亮度）
const addAmbientLight = () => {
	const light = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(light);
};

// TODO: 點光源（產生立體感）
const addPointLight = () => {
	const pointLight = new THREE.PointLight(0xffffff, 1);
	pointLight.position.set(10, 10, -10);
	pointLight.castShadow = true;
	scene.add(pointLight);
};

// TODO: 平行光（類似太陽光，能產生陰影）
const addDirectionalLight = () => {
	const directionalLight = new THREE.DirectionalLight(0xffffff, 4);
	directionalLight.position.set(0, 0, 10);
	directionalLight.castShadow = true;
	scene.add(directionalLight);
};

// TODO: 建立地球
const addEarth = () => {
	const earthGeometry = new THREE.SphereGeometry(5, 50, 50);
	const earthTexture = new THREE.TextureLoader().load("./earthmap1k.jpg");
	earthTexture.encoding = THREE.sRGBEncoding;

	const earthMaterial = new THREE.MeshStandardMaterial({
		map: earthTexture,
		side: THREE.DoubleSide,
	});

	const earth = new THREE.Mesh(earthGeometry, earthMaterial);
	scene.add(earth);
};

// TODO: 建立星空背景
const addSkydome = () => {
	const skydomeTexture = new THREE.TextureLoader().load("./star_sky_hdri_spherical_map_with_galaxy2.jpg");
	skydomeTexture.encoding = THREE.sRGBEncoding;

	const skydomeMaterial = new THREE.MeshBasicMaterial({ map: skydomeTexture, side: THREE.DoubleSide });
	const skydomeGeometry = new THREE.SphereGeometry(100, 50, 50);
	const skydome = new THREE.Mesh(skydomeGeometry, skydomeMaterial);
	scene.add(skydome);
};

// TODO: 創建標記 (Ring)
const geo = new THREE.RingGeometry(0.1, 0.13, 32);
const mat = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const ring = new THREE.Mesh(geo, mat);
scene.add(ring);

// TODO: 將經緯度轉換為世界座標 (ECEF)
const llaToEcef = (lat, lon, alt, rad) => {
	let f = 0;
	let ls = Math.atan((1 - f) ** 2 * Math.tan(lat));
	let x = rad * Math.cos(ls) * Math.cos(lon) + alt * Math.cos(lat) * Math.cos(lon);
	let y = rad * Math.cos(ls) * Math.sin(lon) + alt * Math.cos(lat) * Math.sin(lon);
	let z = rad * Math.sin(ls) + alt * Math.sin(lat);
	return new THREE.Vector3(x, y, z);
};
// 經緯度轉換函數
const lonLauToRadian = (lon, lat, rad) => llaToEcef((Math.PI * (0 - lat)) / 180, Math.PI * (lon / 180), 1, rad);

// TODO: 監聽下拉選單變更事件
citySelect.addEventListener("change", (event) => {
	const cityId = event.target.value;
	const selectedCity = cities.find((city) => city.id.toString() === cityId);

	if (selectedCity) {
		const cityEcefPosition = lonLauToRadian(selectedCity.lon, selectedCity.lat, 5.1);
		// 移動標記位置
		ring.position.set(cityEcefPosition.x, -cityEcefPosition.z, -cityEcefPosition.y);
		ring.lookAt(new THREE.Vector3(0, 0, 0));
		// 讓相機移動，使該城市位於螢幕中央
		controls.target.set(cityEcefPosition.x, -cityEcefPosition.z, -cityEcefPosition.y);
		controls.update();
	}
});

// TODO: 動畫渲染
function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

// TODO: 主程式
const main = () => {
	addPointLight();
	addAmbientLight();
	addDirectionalLight();
	addEarth();
	addSkydome();
	animate();
};

main();
