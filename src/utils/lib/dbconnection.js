import mongoose from "mongoose";

async function connectDb() {
    const MONGODB_URI = process.env.MONGO_DB_URL;
    
    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env file");
    }

    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        throw new Error("MongoDB connection failed");
    }
}

export default connectDb;
