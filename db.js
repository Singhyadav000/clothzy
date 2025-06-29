const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,         // ✔️ avoids deprecation warning
      useUnifiedTopology: true,      // ✔️ improves monitoring
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // force quit if cannot connect
  }
};

module.exports = connectDB;
// 