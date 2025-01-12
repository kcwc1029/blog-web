const http = require("http"); // 引入 HTTP 模組
const routes = require("./routes"); // 引入自定義的 routes.js 模組

// 打印導出的靜態文字
console.log(routes.someText); // 輸出：This is a sample text exported from routes.js

// 建立伺服器並使用 routes.handler 作為請求處理函數
const server = http.createServer(routes.handler);

// 監聽 3000 埠
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
