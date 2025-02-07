let theShader;

function preload() {
	// 載入 Shader 程式碼（來自外部 `.glsl` 檔案）
	theShader = loadShader("vertexShader.glsl", "fragmentShader.glsl");
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	pixelDensity(1);
}

function draw() {
	// 設定 uniform 變數
	theShader.setUniform("u_resolution", [width, height]);
	theShader.setUniform("u_time", frameCount * 0.01);

	// 套用 Shader
	shader(theShader);

	// 畫一個矩形，覆蓋整個畫布（Shader 會影響它）
	rect(0, 0, width, height);
}
