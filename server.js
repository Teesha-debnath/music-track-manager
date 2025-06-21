// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// ✅ Enable CORS BEFORE defining any routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// ✅ Mount the track routes
const trackRoutes = require("./routes/trackRoutes");
app.use("/api/tracks", trackRoutes);

// Sample root route
app.get("/", (req, res) => {
  res.send("🎵 Welcome to the Music Track Manager API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
