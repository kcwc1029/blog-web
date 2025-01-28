import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
// TODO: 讓滑鼠控制鏡頭
import { OrbitControls } from "https://unpkg.com/three@latest/examples/jsm/controls/OrbitControls.js";

// TODO: 建立場景（Scene）

// TODO: 建立攝影機（Camera）

// TODO: 建立渲染器（Renderer）

// TODO: 增加滑鼠控制鏡頭（OrbitControls）

// TODO: 建立天空球體

// TODO: 新增環境光

// TODO: 建立地球

// TODO: 建立太陽

// TODO: 新增點光源（模擬太陽光）

// TODO: 新增點光輔助工具（用於可視化光源位置）

// TODO: 動畫函式（每幀都會更新畫面）
function animate() {
	requestAnimationFrame(animate); // 每次畫面更新時，呼叫自己形成迴圈
	renderer.render(scene, camera); // 渲染場景與攝影機
}

// TODO: 啟動動畫
animate();
