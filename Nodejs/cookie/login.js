const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

// NOTEL 使用cookie
app.use(cookieParser());

// TODO: 當用戶登入時
app.get("/", (req, res) => {
    res.cookie("sessionId", "12345", { httpOnly: true });
    res.send("登入成功！");
});

// TODO: 後續請求中驗證身份
app.get("/profile", (req, res) => {
    if (req.cookies.sessionId === "12345") {
        res.send("這是你的個人資料！");
    } else {
        res.status(401).send("未登入！");
    }
    // 在做跳轉等
});

app.get("/set-theme", (req, res) => {
    res.cookie("theme", "dark", {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 保存 7 天
        httpOnly: true,
    });
    res.send("主題設置為深色模式！");
});

app.get("/get-theme", (req, res) => {
    const theme = req.cookies.theme || "light";
    res.send(`你的主題是：${theme}`);
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
