const express = require("express");
const path = require("path");
const { Sequelize } = require("sequelize");
const UserModel = require("./models/user"); // 引入 User 模型文件

const app = express();

// 設置模板引擎
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 初始化 Sequelize
const sequelize = new Sequelize({
    dialect: "sqlite", // 使用 SQLite
    storage: "./mydatabase.db", // 資料庫檔案位置
});

// 初始化模型
const User = UserModel(sequelize);

// NOTE: 新增多筆資料
app.get("/add-users", async (req, res) => {
    const data = [
        { name: "Cat", email: "cat@example.com" },
        { name: "Dog", email: "dog@example.com" },
        { name: "Charlie", email: "charlie@example.com" },
    ];
    try {
        // 使用 bulkCreate 方法新增多筆資料
        await User.bulkCreate(data);
        console.log("✅ 多筆使用者資料已新增");
        res.render("index", { result: "✅ 多筆使用者資料已新增" });
    } catch (err) {
        console.error("❌ 新增多筆使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 新增多筆使用者資料失敗：${err.message}` });
    }
});

// NOTE: 新增單筆資料
app.get("/add-user", async (req, res) => {
    data = {
        name: "Bob",
        email: "Bob@example.com",
    };
    try {
        await User.create(data);
        console.log("✅ 使用者資料已新增");
        res.render("index", { result: "✅ 使用者資料已新增" });
    } catch (err) {
        console.error("❌ 新增使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 新增使用者資料失敗：${err.message}` });
    }
});

// NOTE: 更新資料
app.get("/update-user", async (req, res) => {
    data = {
        name: "Bob",
        email: "Bob@example.com",
    };
    try {
        await User.destroy({ where: { id: 1 } });
        console.log("✅ 用戶已更新");
        res.render("index", { result: "✅ 用戶已更新" });
    } catch (err) {
        console.error("❌ 更新使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 更新使用者資料失敗：${err.message}` });
    }
});


// NOTE: 更新資料
app.get("/update-user", async (req, res) => {

    try {
        await User.destroy({ where: { id: 1 } });
        console.log("✅ 用戶已更新");
        res.render("index", { result: "✅ 用戶已更新" });
    } catch (err) {
        console.error("❌ 更新使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 更新使用者資料失敗：${err.message}` });
    }
});



// 根目錄頁面
app.get("/", async (req, res) => {
    try {
        await sequelize.authenticate(); // 測試資料庫連接
        await sequelize.sync(); // 測試資料庫同步
        console.log("✅ 資料庫連接與同步完成");
    } catch (err) {
        console.error("❌ 資料庫初始化失敗：", err.message);
        process.exit(1); // 無法啟動伺服器時退出程式
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
