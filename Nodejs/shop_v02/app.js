const express = require("express");

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true })); // 中介軟體解析 POST 數據

// TODO: filter path
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
// NOTE: 404 not found
app.use((req, res, next) => {
    res.status(404).send("<h3>404 not found</h3>");
});
app.listen(3000);
