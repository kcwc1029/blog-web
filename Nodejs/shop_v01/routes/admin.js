const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
                <form action="/product" method="post">
                    <label for="name">姓名：</label>
                    <input type="text" name="name" />
                    <button type="submit">提交</button>
                </form>
            </body>
        </html>
        `);
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    console.log("----------");
    console.log(req.body.name);
    res.redirect("/");
});

module.exports = router;
