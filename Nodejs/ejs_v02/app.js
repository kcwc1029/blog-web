const express = require("express");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// NOTE: 中介軟體解析 POST 數據
app.use(express.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(shopRoutes);

// NOTE: 根目錄頁面
app.get("/", (req, res) => {
    res.send("<h3>這是跟目錄頁面</h3>");
});

// NOTE: 404 not found
app.use((req, res, next) => {
    res.status(404).render("404");
});
app.listen(3000);
