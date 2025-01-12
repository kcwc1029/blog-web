const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server, path: "/ws" });

// TODO: 與客戶端連接
wss.on("connection", (ws) => {
    console.log("新的客戶端已連接");

    ws.on("message", (message) => {
        console.log("收到的訊息：", message);
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`客戶端說：${message}`);
            }
        });
    });

    ws.on("close", () => {
        console.log("客戶端已斷開連接");
    });
});

// NOTE: 模擬主動發送通知給客戶
setInterval(() => {
    const notification = `伺服器通知：${new Date().toLocaleTimeString()}`;
    // WebSocket 對每個客戶端執行指定的操作
    wss.clients.forEach((client) => {
        // client.readyStat：示客戶端的當前連接狀態
        if (client.readyState === WebSocket.OPEN) {
            client.send(notification);
        }
    });
}, 10000);

server.listen(3000, () => {
    console.log("伺服器已啟動：http://localhost:3000");
});
