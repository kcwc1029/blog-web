const express = require("express");
const path = require("path"); // 引入 path 模組
const sqlite3 = require("sqlite3").verbose(); // 引入 sqlite3 模塊並啟用詳細日誌
const { Sequelize, DataTypes } = require("sequelize");
const app = express();

// 設置模板引擎
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// 初始化 Sequelize，指定使用 SQLite 數據庫
const sequelize = new Sequelize({
    dialect: "sqlite", // 指定使用 SQLite
    storage: "./mydatabase.db", // 指定 SQLite 文件位置
});

// 定義模型
const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
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

// NOTE: 新增多筆資料
app.get("/add-more-users", async (req, res) => {
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

// NOTE: 更新資料
app.get("/update-user", async (req, res) => {
    try {
        await User.update({ name: "AliceUpdated" }, { where: { id: 1 } });
        console.log("✅ 用戶已更新");
        res.render("index", { result: "✅ 用戶已更新" });
    } catch (err) {
        console.error("❌ 更新使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 更新使用者資料失敗：${err.message}` });
    }
});

// NOTE: 更新資料
app.get("/delete-user", async (req, res) => {
    try {
        await User.destroy({ where: { id: 1 } });
        console.log("✅ 用戶已刪除");
        res.render("index", { result: "✅ 用戶已刪除" });
    } catch (err) {
        console.error("❌ 刪除使用者資料失敗：", err.message);
        res.render("index", { result: `❌ 刪除使用者資料失敗：${err.message}` });
    }
});

// NOTE: 根目錄頁面
app.get("/", async (req, res) => {
    // 測試連接
    try {
        // 與資料庫連接
        await sequelize.authenticate();
        // 同步模型到數據庫：{ force: true }會刪除舊表並重新創建
        await sequelize.sync({ force: true });
        console.log("✅ 表 User 已成功創建");
        res.send("✅ 成功連接到 SQLite 數據庫，表已同步完成");
    } catch (err) {
        console.error("❌ 無法連接到數據庫或同步模型：", err.message);
        res.send(`❌ 錯誤：${err.message}`);
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
