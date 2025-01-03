const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Hello from Express!");
});

module.exports = router;
