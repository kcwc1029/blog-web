const express = require("express");
const session = require("express-session");

const app = express();

app.use(
    session({
        secret: "mySecretKey",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 300000 }, // 5 分鐘
    })
);

// 模擬登入
app.get("/login", (req, res) => {
    req.session.username = "TA"; // 在 Session 中存儲用戶名
    res.send("登入成功，歡迎你！");
});

// 訪問個人資料
app.get("/profile", (req, res) => {
    if (req.session.username) {
        res.send(`這是你的個人資料，${req.session.username}！`);
    } else {
        res.status(401).send("未登入，請先登入！");
    }
});

// TODO: 登出：銷毀 Session
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("登出失敗！");
        }
        res.send("登出成功！");
    });
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("伺服器已啟動：http://localhost:3000");
});
