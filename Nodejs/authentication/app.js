const path = require("path");
const express = require("express");

const app = express();
app.use(express.json()); // 解析 JSON 請求
app.use(express.urlencoded({ extended: true }));

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// NOTE: 設定session
const session = require("express-session");
// 添加 session 中介軟體
app.use(
    session({
        secret: "your-secret-key", // 用於加密 session 的密鑰，請換成自己的隨機字串
        resave: false, // 不強制保存 session，即使未更改
        saveUninitialized: true, // 未初始化的 session 也儲存
        cookie: {
            secure: false,
            maxAge: 1000 * 60, // 設定 10s
        }, // 如果使用 HTTPS，將此設為 true
    })
);

// 模擬用戶資料庫
const users = {
    admin: { password: "admin", role: "admin" },
    user: { password: "user", role: "user" },
};

// TODO: user、admiin權限路由
app.get("/profile", (req, res) => {
    if (req.session.role) {
        res.send(`歡迎！您的角色是 ${req.session.role}`);
    } else {
        res.status(401).send("尚未登入，無法查看個人資料！");
    }
});

// TODO: admiin權限路由
app.get("/admin", (req, res) => {
    if (req.session.role === "admin") {
        res.send("歡迎進入管理員界面！");
    } else {
        res.status(403).send("你沒有管理員權限！");
    }
});

// TODO: 處裡登入帳密
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username].password === password) {
        // 設定 session 資料
        req.session.role = users[username].role;
        req.session.user = username; // 這個非必要
        res.send(
            `
            登入成功！角色為 ${req.session.role}<br />
            確定有cookie後，可以嘗試以下路由<br />
            /profile：user跟admin都可以查看<br />
            /admin：只有admin可以查看
            `
        );
    } else {
        res.status(401).send("用戶名或密碼錯誤！");
    }
});

// 首頁跳轉到填寫帳密登入
app.get("/login", (req, res) => {
    res.render("login");
});

// TODO: 查看session
app.get("/session", (req, res) => {
    res.send({
        session: req.session,
    });
});

// TODO: 登出路由
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("登出失敗！");
        }
        res.send("登出成功！");
    });
});

app.get("/", (req, res) => {
    res.render("index");
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
