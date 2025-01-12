const express = require("express");
const app = express();
const path = require("path");
const { connectDB } = require("./mongo"); // 引入封裝的 connectDB 函數
const { type } = require("os");

// NOTE: EJS
app.set("view engine", "ejs"); // 設置模板引擎為 EJS
app.set("views", path.join(__dirname, "views")); // 設置模板文件目錄

app.get("/", (req, res) => {
    res.send("這是根目錄");
});

app.get("/mongo", async (req, res) => {
    try {
        const client = await connectDB();
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching users");
    }
});

app.get("/mongo-createCollection", async (req, res) => {
    const clusterName = "Cluster0"; // Cluster名稱
    const collectionName = "users"; // Collection名稱
    try {
        const client = await connectDB();
        const db = client.db(clusterName);
        await db.createCollection(collectionName);
        res.send(`Collection '${collectionName}' created successfully!`);
    } catch (error) {
        console.error("Error creating collection:", error);
        res.status(500).send("Error creating collection");
    }
});

// TODO: 插入單筆資料
app.get("/mongo-insertOne", async (req, res) => {
    const clusterName = "Cluster0"; // Cluster名稱
    const collectionName = "users"; // Collection名稱
    const document = { name: "TA01", age: 23, city: "Kaohsiung" }; // 要插入的單筆資料
    try {
        const client = await connectDB();
        const db = client.db(clusterName);
        const collection = db.collection(collectionName);
        // NOTE: 插入資料
        const result = await collection.insertOne(document);
        res.send(`Inserted one document with _id: ${result.insertedId}`);
    } catch (error) {
        console.error("Error creating collection:", error);
        res.status(500).send("Error creating collection");
    }
});

// TODO: 插入多筆資料
app.get("/mongo-insertMany", async (req, res) => {
    const clusterName = "Cluster0"; // Cluster名稱
    const collectionName = "users"; // Collection名稱
    // 插入的多筆資料，結構不同
    const documents = [
        { name: "Bob", age: 25, city: "Taipei" },
        { name: "Bob", hobbies: ["reading", "gaming"], married: false },
        { job: "Engineer", salary: 50000 },
        { name: "Carol", skills: { programming: "Python", design: "Photoshop" } },
    ];
    try {
        const client = await connectDB();
        const db = client.db(clusterName);
        const collection = db.collection(collectionName);
        // NOTE: 插入資料
        const result = await collection.insertMany(documents);
        res.send(`Inserted ${result.insertedCount} documents with different formats`);
    } catch (error) {
        console.error("Error creating collection:", error);
        res.status(500).send("Error creating collection");
    }
});

// TODO: 查詢單筆資料
app.get("/mongo-findOne", async (req, res) => {
    const query = { name: "Bob" }; // 查詢條件
    const clusterName = "Cluster0"; // Cluster名稱
    const collectionName = "users"; // Collection名稱
    try {
        const client = await connectDB();
        const db = client.db(clusterName);
        const collection = db.collection(collectionName);
        // 查詢單筆資料
        const document = await collection.findOne(query);
        console.log(document._id);
        console.log(document.age);
        res.send(document ? document : "No document found");
    } catch (error) {
        console.error("Error finding document:", error);
        res.status(500).send("Error finding document");
    }
});

// TODO: 查詢多筆資料
app.get("/mongo-findMany", async (req, res) => {
    const clusterName = "Cluster0"; // Cluster名稱
    const collectionName = "users"; // Collection名稱
    const query = { age: { $gt: 20 } }; // 查詢條件：查詢年齡大於 25 的文件
    try {
        const client = await connectDB();
        const db = client.db(clusterName);
        const collection = db.collection(collectionName);
        // 查詢多筆資料並排序
        // 返回資料型態為cursor，須轉為array
        const documents = await collection.find(query).toArray();
        res.send(documents.length ? documents : "No documents found");
    } catch (error) {
        console.error("Error finding documents:", error);
        res.status(500).send("Error finding documents");
    }
});

// TODO: 更新一筆資料
app.get("/mongo-updateOne", async (req, res) => {
    const query = { name: "Bob" }; // 要更新的查詢條件
    const update = { $set: { age: 40 } }; // $set: 用於更新指定欄位的值（若欄位不存在則新增）
    try {
        const client = await connectDB();
        const db = client.db("Cluster0");
        const collection = db.collection("users");
        // 更新一筆資料
        const result = await collection.updateOne(query, update);
        if (result.matchedCount > 0) res.send(`Successfully updated ${result.modifiedCount} document(s)`);
        else res.send("No documents matched the query");
    } catch (error) {
        console.error("Error updating document:", error);
        res.status(500).send("Error updating document");
    }
});

// TODO: 更新多筆資料
app.get("/mongo-updateMany", async (req, res) => {
    const query = { name: "Bob" }; // 查詢條件
    const update = { $set: { "hobbies.1": "programming" } }; // 更新陣列索引 1 的值
    try {
        const client = await connectDB();
        const db = client.db("Cluster0");
        const collection = db.collection("users");
        const result = await collection.updateMany(query, update);

        if (result.matchedCount > 0) res.send(`Successfully updated ${result.modifiedCount} document(s)`);
        else res.send("No documents matched the query");
    } catch (error) {
        console.error("Error updating documents:", error);
        res.status(500).send("Error updating documents");
    }
});

// TODO: 刪除單筆資料
app.get("/mongo-deleteOne", async (req, res) => {
    const query = { name: "Bob" }; // 查詢條件
    try {
        const client = await connectDB();
        const db = client.db("Cluster0");
        const collection = db.collection("users");
        const result = await collection.deleteOne(query);

        if (result.deletedCount > 0) res.send(`Deleted ${result.deletedCount} document`);
        else res.send("No matching document found");
    } catch (error) {
        console.error("Error deleting document:", error);
        res.status(500).send("Error deleting document");
    }
});

// TODO: 刪除多筆資料
app.get("/mongo-deleteOne", async (req, res) => {
    const query = { age: { $gt: 30 } }; // 查詢條件
    try {
        const client = await connectDB();
        const db = client.db("Cluster0");
        const collection = db.collection("users");
        const result = await collection.deleteMany(query);

        if (result.deletedCount > 0) res.send(`Deleted ${result.deletedCount} document`);
        else res.send("No matching document found");
    } catch (error) {
        console.error("Error deleting document:", error);
        res.status(500).send("Error deleting document");
    }
});

// TODO: 刪除 users 集合中的所有文件
app.get("/mongo-deleteAll", async (req, res) => {
    const query = {}; // 空查詢
    try {
        const client = await connectDB();
        const db = client.db("Cluster0");
        const collection = db.collection("users");
        const result = await collection.deleteMany(query);
        res.send(`Deleted all documents in the collection`);
    } catch (error) {
        console.error("Error deleting all documents:", error);
        res.status(500).send("Error deleting all documents");
    }
});

// TODO: 刪除 users 集合
app.get("/mongo-dropCollection", async (req, res) => {
    try {
        const client = await connectDB();
        const db = client.db("Cluster0");
        await db.collection("users").drop();
        res.send(`Collection '${collectionName}' dropped successfully`);
    } catch (error) {
        if (error.codeName === "NamespaceNotFound") {
            res.send(`Collection '${collectionName}' does not exist`);
        } else {
            console.error("Error dropping collection:", error);
            res.status(500).send("Error dropping collection");
        }
    }
});

// 啟動伺服器
app.listen(3000, () => {
    console.log("🚀 伺服器已啟動：http://localhost:3000");
});
