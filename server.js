const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Configs/db"); // make sure it's lowercase: config/db.js
const authRoutes = require("./routes/authRoutes");

dotenv.config();        // Load .env variables
connectDB();            // Connect to MongoDB

const app = express();

app.use(cors());        // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use("/api/auth", authRoutes); // e.g. POST /api/auth/login

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
