const path = require("path");
const express = require("express");

const app = express();
app.use(express.json()); // 解析 JSON 請求
app.use(express.urlencoded({ extended: true }));

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// 寫一個函數來處理實間部分
const getFormattedDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // 月份從 0 開始
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
};

// NOTE: 處裡檔案
const multer = require("multer");
// 設置檔案上傳的目錄和名稱
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // 上傳目錄
    },
    filename: (req, file, cb) => {
        const formattedDate = getFormattedDate(); // 獲取格式化的時間字串
        cb(null, `${formattedDate}_${file.originalname}`); // 使用時間+原始檔名作為檔案名
    },
});
const upload = multer({ storage: storage });
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // 靜態資源設置，方便訪問上傳的檔案

// 建立 uploads 資料夾（如果不存在）
const fs = require("fs");
if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}

// 檔案上傳 API
app.post("/upload", upload.array("file"), (req, res) => {
    try {
        // 獲取上傳的所有檔案資訊
        const files = req.files.map((file) => ({
            fileName: file.filename, // 上傳後的檔案名稱
            fileExtension: path.extname(file.originalname), // 副檔名
        }));
        res.status(200).json({
            message: "檔案上傳成功！",
            files: files, // 返回所有檔案的名稱和副檔名
        });
    } catch (error) {
        res.status(500).json({
            message: "檔案上傳失敗！",
            error: error.message,
        });
    }
});

app.get("/", (req, res) => {
    res.render("index", { message: "" });
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
