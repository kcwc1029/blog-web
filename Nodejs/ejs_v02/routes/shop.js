const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    // NOTE: 將後端資料傳輸到前端
    res.render("shop", { user: "TA", num: 23 });
});

module.exports = router;
