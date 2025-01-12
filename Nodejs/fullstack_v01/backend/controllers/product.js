const Product = require("../models/product");

// 獲取資料 ->轉JSON
const getProducts = (req, res, nex) => {
    const products = Product.fetchAll(); // 調用靜態方法獲取所有產品
    res.json(products);
};

// 新增
const addProduct = (req, res, next) => {
    const { name, price } = req.body;
    const product = new Product(name, price);
    product.save();
    res.status(201).json({ message: "資料以增加" });
};

// 刪除
const deleteProduct = (req, res, next) => {
    const { name } = req.body;
    Product.delete(name);
    res.status(200).json({ message: "資料以刪除" });
};

// 作為模組傳出
// 確保正確導出
module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
};
