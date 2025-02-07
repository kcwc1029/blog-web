import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// TODO: 定義城市資料

// TODO: 建立 HTML 下拉選單

// 渲染下拉選單

// TODO: 建立場景

// TODO: 建立相機

// TODO: 建立渲染器

// TODO: 加入滑鼠控制

// TODO: 環境光（提供整體亮度）

// TODO: 點光源（產生立體感）

// TODO: 平行光（類似太陽光，能產生陰影）

// TODO: 建立地球

// TODO: 建立星空背景

// TODO: 創建標記 (Ring)

// TODO: 將經緯度轉換為世界座標 (ECEF)

// TODO: 監聽下拉選單變更事件

// TODO: 動畫渲染

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
