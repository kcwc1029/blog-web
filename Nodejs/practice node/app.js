const http = require("http");
const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    res.send(`this is user page`);
});

// NOTE:  路由參數
app.get("/user/:id", (req, res) => {
    const userId = req.params.id; // 取得路由參數
    res.send(`User ID is: ${userId}`);
});

// NOTE: 查詢字串參數
app.get("/search", (req, res) => {
    const query = req.query.q; // 取得查詢字串參數
    res.send(`Search query is: ${query}`);
});

app.use("/", (req, res, next) => {
    res.send("Hello from Express!");
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
