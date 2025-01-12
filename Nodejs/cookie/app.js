const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

// NOTEL 使用cookie
app.use(cookieParser());

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// TODO: 訪問跟目錄時，立即設地cookie
app.get("/", (req, res) => {
    res.cookie("username", "TA", { maxAge: 900000, httpOnly: true });
    // maxAge：Cookie 的有效期，這裡設置為 15 分鐘（900,000 毫秒）
    // httpOnly：禁止 JavaScript 操作該 Cookie，增加安全性
    res.send("這是根目錄");
});

// TODO: 讀取cookie
app.get("/get-cookie", (req, res) => {
    const cookies = req.cookies; // 取得所有的 Cookie
    console.log(cookies);
    res.json(cookies); // 返回 Cookie 資訊
});

// TODO: 刪除cookie
app.get("/delete-cookie", (req, res) => {
    res.clearCookie("username"); // 清除名為 username 的 Cookie
    res.send("Cookie username 已刪除");
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
