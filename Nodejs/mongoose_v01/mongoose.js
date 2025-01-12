const mongoose = require("mongoose");
const clusterName = "myDatabase";
const url = `mongodb+srv://TA:dPAAS6vIMdIrDPKw@cluster0.ns94v.mongodb.net/${clusterName}?retryWrites=true&w=majority&appName=Cluster0`;
// 原本mongoDB的url，直接拿來mongoose用的話，會變成開一個testr的cluster
// const uri = "mongodb+srv://TA:dPAAS6vIMdIrDPKw@cluster0.ns94v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
}
module.exports = { connectDB };
