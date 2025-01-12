const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://TA:dPAAS6vIMdIrDPKw@cluster0.ns94v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// 修改：讓他保持連線
async function connectDB() {
    try {
        if (!client.isConnected) {
            await client.connect();
            console.log("Connected to MongoDB!");
        }
        return client; // 返回共享連線
    } catch (err) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}

module.exports = { connectDB };
