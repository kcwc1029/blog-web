const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.render("add-product");
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    console.log("----------");
    console.log(req.body.name);
    res.redirect("/");
});

module.exports = router;
