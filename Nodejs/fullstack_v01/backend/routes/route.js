const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.get("/products", productController.getProducts);
router.post("/products", productController.addProduct);
router.delete("/products", productController.deleteProduct);

module.exports = router;
