const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected ✅ Host: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error("MongoDB connection error❌ :", err.message);
    // Don't exit process in serverless environment
    return null;
  }
};

module.exports = connectDB;
