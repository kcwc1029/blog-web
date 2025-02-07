precision highp float;  // 設定畫面精確度為高

// 接收 P5.js 傳入的形狀參數。
// attribute 是一種變數，每個頂點（Vertex）Shader 都要跑一次。
// vec3 是一種資料類型，能儲存三個 float 的值。
// 其他類型如 vec2 可存兩個值，vec4 則能存四個值。
attribute vec3 aPosition;  

void main() {  
    // 建立一個能儲存四個值的向量，前三個值來自 aPosition，第四個值設定為 1.0
    vec4 positionVec4 = vec4(aPosition, 1.0);  

    // 調整 XY 座標範圍，使其對應到 WebGL 的 -1 到 1 坐標系
    positionVec4.xy = positionVec4.xy * 2.0 - 1.0;  

    // gl_Position 是 Shader 的輸出，決定頂點最終的位置
    gl_Position = positionVec4;  
}
