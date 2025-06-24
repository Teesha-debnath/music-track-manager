const express = require("express");
const cors = require("cors");
const trackRoutes = require("./routes/trackRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tracks", trackRoutes);

app.get("/", (req, res) => {
  res.send("🎵 Welcome to the Music Track Manager API!");
});

module.exports = app;
