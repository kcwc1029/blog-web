const express = require("express");
const app = express();
const path = require("path");
const { connectDB } = require("./mongo"); // 引入封裝的 connectDB 函數

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

app.get("/", (req, res) => {
    res.send("這是根目錄");
});

app.get("/mongo", async (req, res) => {
    try {
        const client = await connectDB();
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching users");
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
