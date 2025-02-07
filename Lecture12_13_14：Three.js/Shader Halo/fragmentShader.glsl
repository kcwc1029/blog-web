#ifdef GL_ES  
precision mediump float;  // 設定畫面精確度為中  
#endif  

// 接收 JavaScript 傳入的參數，這裡代表 Canvas 的長寬
// uniform 變數可以在 Shader 之外由 JavaScript 來修改
uniform vec2 u_resolution;  

void main() {  
    // 取得當前像素的座標，並將其正規化到 (0~1) 的範圍
    // gl_FragCoord 是 Fragment Shader 內建的變數，儲存像素的座標
    vec2 st = gl_FragCoord.xy / u_resolution.xy;  

    // 計算畫面的長寬比例
    // 假設螢幕解析度為 800x600，則長寬比為 (1.33, 1.0)
    vec2 screenRatio = vec2(u_resolution.x / u_resolution.y, 1.0);  

    // 讓 st 乘上長寬比，確保在不同解析度下仍保持比例
    st *= screenRatio;  

    // 計算當前像素到畫布中心 (0.5, 0.5) 的距離
    float length = length(st - vec2(0.5, 0.5) * screenRatio);  

    // 設定像素的顏色，根據距離調整亮度
    // 越靠近中心 (0,0)，數值越小，顏色越亮
    gl_FragColor = vec4(1.0 / length * 0.1, 1.0 / length * 0.1, 1.0 / length * 0.1, 1.0);  
}
