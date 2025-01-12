// app.js
const express = require("express");
const path = require("path"); // 引入 path 模組
const sqlite3 = require("sqlite3").verbose(); // 引入 sqlite3 模塊並啟用詳細日誌
const app = express();

// 設置模板引擎
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// 初始化資料庫
const db = new sqlite3.Database("mydatabase.db", (err) => {
    if (err) {
        console.error("❌ 無法打開數據庫：", err.message);
        return res.render("index", { result: "❌ 無法打開數據庫：" + err.message });
    }
    console.log("✅ 已成功連接到 SQLite 數據庫");
});

// NOTE: 刪除資料表
app.get("/delete-table", (req, res) => {
    const dropTableQuery = `DROP TABLE IF EXISTS users`;
    db.run(dropTableQuery, (err) => {
        if (err) {
            return res.render("index", { result: `❌ 無法刪除表：${err.message}` });
        }
        res.render("index", { result: "✅ 表 users 已成功刪除！" });
    });
});

// NOTE:更新資料
// app.post("/update-user", (req, res) => {
app.use("/update-user", (req, res) => {
    // const { id, name } = req.body;
    let name = "TA2";
    let email = "777@gmail.com";
    const updateQuery = `UPDATE users SET name = ? WHERE id = ?`;
    db.run(updateQuery, [name, id], (err) => {
        if (err) {
            return res.render("index", { result: `❌ 無法更新資料：${err.message}` });
        }
        res.render("index", { result: "✅ 資料已成功更新！" });
    });
});

// NOTE: 新增單筆資料
// app.post("/add-user", (req, res) => {
app.use("/add-user", (req, res) => {
    // const { name, email } = req.body; // 使嗽
    const data = ["TA3", "TA3@gmail.com"]; // 資料必須是數組
    const insertQuery = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(insertQuery, data, (err) => {
        if (err) {
            return res.render("index", { result: `❌ 無法新增資料：${err.message}` });
        } else {
            res.render("index", { result: "✅ 資料成功新增" });
        }
    });
});

// NOTE: 查詢單筆資料
app.get("/read-user/:id", (req, res) => {
    const userId = req.params.id; // 從 URL 中取得用戶 ID
    const db = new sqlite3.Database("mydatabase.db");
    const selectQuery = `SELECT * FROM users WHERE id = ?`; // 查詢語句

    db.get(selectQuery, [userId], (err, row) => {
        if (err) {
            return res.render("index", { result: `❌ 無法讀取資料：${err.message}` });
        }
        if (row) {
            res.render("index", { result: JSON.stringify(row, 4) });
        } else {
            res.render("index", { result: "❌ 查無此用戶" });
        }
    });
});

// NOTE: 新增多筆資料
app.use("/add-more-users", (req, res) => {
    const users = [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob", email: "bob@example.com" },
        { name: "Charlie", email: "charlie@example.com" },
        { name: "John", email: "John@example.com" },
        { name: "Fish", email: "Fish@example.com" },
        { name: "Sam", email: "Sam@example.com" },
        { name: "Tom", email: "Tom@example.com" },
        { name: "Qin", email: "Qin@example.com" },
    ];

    let errorCount = 0;
    users.forEach((user) => {
        const insertQuery = `INSERT INTO users (name, email) VALUES (?, ?)`;
        db.run(insertQuery, [user.name, user.email], (err) => {
            if (err) {
                return res.render("index", { result: `❌ 無法新增資料：${err.message}` });
            }
        });
    });
    res.render("index", { result: "✅ 資料成功新增" });
});

// NOTE: 新增table
app.get("/add-table", (req, res) => {
    const createTableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
            )
        `;
    db.run(createTableQuery, (err) => {
        if (err) {
            res.render("index", { result: `❌ 無法創建表：${err.message}` });
        } else {
            res.render("index", { result: "✅ 表 users 已成功創建" });
        }
    });
});

// NOTE: 根目錄頁面
app.get("/", (req, res) => {
    res.render("index", { result: "資料庫初始化完成" });
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});

// 捕獲伺服器關閉事件，執行清理操作
process.on("SIGINT", () => {
    console.log("\n🛑 伺服器正在關閉...");
    // 關閉資料庫連接
    if (db) {
        db.close();
    }
    process.exit(0); // 正常退出
});
