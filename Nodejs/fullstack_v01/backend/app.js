const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/route");

const app = express(); // 建立 Express 應用程式實例
app.use(bodyParser.json()); // 使用 body-parser 中間件來解析 JSON 請求主體
app.use(cors()); // 使用 cors 中間件來允許跨域請求
app.use(productRoutes);
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
