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

// TODO: 後端下載 API
app.get("/download/:filename", (req, res) => {
    const filename = req.params.filename; // 從路徑參數中取得檔案名稱
    const filepath = path.join(__dirname, "uploads", filename); // 檔案完整路徑

    // 檢查檔案是否存在
    if (fs.existsSync(filepath)) {
        res.download(filepath, filename, (err) => {
            if (err) {
                res.status(500).json({ message: "檔案下載失敗！", error: err.message });
            }
        });
    } else {
        res.status(404).json({ message: "檔案不存在！" });
    }
});

// 檔案上傳 API
app.post("/upload", upload.single("file"), (req, res) => {
    try {
        const fileName = req.file.filename; // 上傳檔案名稱
        const fileExtension = path.extname(req.file.originalname); // 副檔名
        res.status(200).json({
            message: "檔案上傳成功！",
            fileName: fileName, // 檔案名稱
            fileExtension: fileExtension, // 檔案副檔名
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
