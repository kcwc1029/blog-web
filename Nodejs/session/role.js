const express = require("express");
const session = require("express-session");

const app = express();

app.use(
    session({
        secret: "roleManagement",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 天
    })
);

// 模擬登入
app.get("/login", (req, res) => {
    req.session.username = "TA";
    req.session.role = "admin"; // 為用戶分配角色
    res.send("登入成功，角色已分配為 admin！");
});

// 檢查是否為 admin
app.get("/admin", (req, res) => {
    if (req.session.role === "admin") {
        res.send("歡迎進入管理員界面！");
    } else {
        res.status(403).send("你沒有管理員權限！");
    }
});

// 普通用戶界面
app.get("/user", (req, res) => {
    if (req.session.username) {
        res.send(`歡迎，${req.session.username}！`);
    } else {
        res.status(401).send("未登入！");
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("伺服器已啟動：http://localhost:3000");
});
