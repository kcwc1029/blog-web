const express = require("express");
const session = require("express-session");

const app = express();

app.use(
    session({
        secret: "visitCounter",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 天
    })
);

app.get("/", (req, res) => {
    if (!req.session.views) {
        req.session.views = 1; // 如果沒有 views，初始化
    } else {
        req.session.views++; // 訪問次數增加
    }
    res.send(`你已經訪問了 ${req.session.views} 次！`);
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("伺服器已啟動：http://localhost:3000");
});
