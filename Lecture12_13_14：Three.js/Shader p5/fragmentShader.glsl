#ifdef GL_ES
precision mediump float;  // 設定畫面精確度為中
#endif

// 接收 JavaScript 傳入的參數，在這裡代表 Canvas 的長寬
// uniform 變數可以在 Shader 之外由 JavaScript 設定
uniform vec2 u_resolution;

void main() {  
    // 計算當前像素的座標，並將其正規化到 (0~1) 範圍
    // gl_FragCoord 是 Fragment Shader 內建的變數，存儲像素的螢幕座標
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    // gl_FragColor 為程式的終點，設定每個像素的顏色：
    // - 紅色（R）對應 X 座標
    // - 綠色（G）對應 Y 座標
    // - 藍色（B）固定為 0
    // - 透明度（A）固定為 1
    gl_FragColor = vec4(st.xy, 0.0, 1.0);
}
