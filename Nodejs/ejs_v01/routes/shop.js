const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    // res.send("Hello from Express!");
    res.render("shop");
});

module.exports = router;
