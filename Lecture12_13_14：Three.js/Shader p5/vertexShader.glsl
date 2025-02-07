precision highp float;  // 設定畫面精確度為高

// 接收 P5.js 傳入的形狀參數
// attribute 是一種變數，每個頂點（Vertex Shader）都要執行一次
// vec3 是一種數據類型，能存三個 float 的值
// 其他類型：vec2（存兩個值）、vec4（存四個值）
attribute vec3 aPosition;

void main() {  
    // 建立一個四維向量，前三個值來自 aPosition，第四個值設為 1.0
    vec4 positionVec4 = vec4(aPosition, 1.0);  

    // 調整 XY 座標範圍，將座標從 (0~1) 轉換到 (-1~1)
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;  

    // gl_Position 是頂點的最終位置，決定渲染時的顯示位置
    gl_Position = positionVec4;  
}