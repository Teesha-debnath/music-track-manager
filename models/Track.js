const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  duration: {
    type: Number, // in seconds
    required: true,
  },
  releaseDate: {
    type: Date,
    default: Date.now,
  },
});

const Track = mongoose.model("Track", trackSchema);
module.exports = Track;
