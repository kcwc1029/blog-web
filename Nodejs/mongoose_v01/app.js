const express = require("express");
const app = express();
const path = require("path");
const { connectDB } = require("./mongoose"); // 引入封裝的 connectDB 函數
const { Schema, model } = require("mongoose"); // 定義 Schema

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

// NOTE: 定義 User Schema
const userSchema = new Schema({
    name: { type: String, required: true }, // 字串類型，必填
    age: { type: Number, min: 0 }, // 數字類型，最小值為 0
    hobbies: [String], // 字串陣列
    isMarried: { type: Boolean, default: false }, // 布林值，默認為 false
});

// 創建 Model
const User = model("User", userSchema); // model名稱

app.get("/", (req, res) => {
    res.send("這是根目錄");
});

// TODO: 新增一筆資料
app.get("/createUser", async (req, res) => {
    const user = new User({
        name: "Alice",
        age: 25,
        hobbies: ["reading", "traveling"],
        isMarried: false,
    });
    try {
        const client = await connectDB();
        const result = await user.save(); // 儲存資料
        res.send(`User created: '${result}'`);
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// TODO: 新增多筆資料
app.get("/createMany", async (req, res) => {
    const users = [
        { name: "Bob", age: 30, hobbies: ["gaming", "coding"] },
        { name: "Carol", age: 28, isMarried: true },
    ];
    try {
        const client = await connectDB();
        const result = await User.insertMany(users); // 插入多筆
        res.send(`User created: '${result}'`);
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// TODO: 查詢所有資料
app.get("/findAllUsers", async (req, res) => {
    try {
        const client = await connectDB();
        const users = await User.find(); // 查詢所有
        res.json(users); // 使用 Express 的內建方法返回 JSON
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// TODO: 查詢符合條件的資料
app.get("/findSpecificUsers", async (req, res) => {
    try {
        const client = await connectDB();
        const users = await User.find({ age: { $gt: 20 } }); // 年齡大於 20
        res.json(users); // 使用 Express 的內建方法返回 JSON
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// TODO: 更新單筆資料
app.get("/updateOne", async (req, res) => {
    const query = { name: "Bob" }; // 查詢條件
    const update = { $set: { age: 35 } }; // 更新內容

    try {
        const client = await connectDB();
        const users = await User.findOneAndUpdate(query, update); // 年齡大於 20
        res.json(users); // 使用 Express 的內建方法返回 JSON
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// TODO: 更新多筆資料
app.get("/updateMany", async (req, res) => {
    const query = { age: { $gt: 20 } }; // 查詢條件：年齡大於 20 的文件
    const update = { $set: { city: "Taipei" } }; // 更新內容：將 city 設為 "Taipei"

    try {
        const client = await connectDB();
        const result = await User.updateMany(query, update);
        res.json(result); // 使用 Express 的內建方法返回 JSON
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// TODO: 刪除單筆資料
app.get("/deleteUser", async (req, res) => {
    const id = "該筆資料ID";
    try {
        const client = await connectDB();
        const result = await User.findByIdAndDelete(id); // 根據 ID 刪除
        res.send(`Deleted User: ${result}`);
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// TODO: 刪除多筆資料
app.get("/deleteUser", async (req, res) => {
    const query = { age: { $lt: 25 } };
    try {
        const client = await connectDB();
        const result = await User.deleteMany(query); // 根據 ID 刪除
        res.send(`Deleted User: ${result}`);
    } catch (err) {
        res.status(500).send(`Error dropping collection ${err}`);
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
