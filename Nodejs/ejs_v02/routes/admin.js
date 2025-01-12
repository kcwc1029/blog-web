const express = require("express");
const router = express.Router();

// NOTE: 將後端資料傳輸到前端
router.get("/add-product", (req, res, next) => {
    res.render("add-product", { items: ["Apple", "Banana", "Cherry"] });
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    console.log("----------");
    console.log(req.body.name);
    res.redirect("/");
});

module.exports = router;
