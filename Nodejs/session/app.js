const path = require("path");
const express = require("express");
const session = require("express-session");

const app = express();

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// 設置 Session middleware
app.use(
    session({
        secret: "mySecret", // 用於簽名 Session ID 的密鑰
        resave: false, // 如果 Session 沒有變化，是否強制保存
        saveUninitialized: true, // 是否儲存未初始化的 Session
        cookie: { maxAge: 60000 }, // Session 的有效期（毫秒）
    })
);

// TODO: 設置 Session 值
app.get("/", (req, res) => {
    req.session.username = "TA"; // 將用戶名存入 Session
    res.send("登入成功，Session 已創建！");
});

// TODO: 讀取 Session 值
app.get("/profile", (req, res) => {
    if (req.session.username) {
        res.send(`歡迎，${req.session.username}！這是你的個人資料。`);
    } else {
        res.status(401).send("未登入！");
    }
});

// TODO: 銷毀 Session
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("登出失敗！");
        }
        res.send("登出成功，Session 已銷毀！");
    });
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
