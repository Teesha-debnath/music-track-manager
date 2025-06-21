const Track = require("../models/Track");

// @desc    Get all tracks
// @route   GET /api/tracks
exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find();
    res.status(200).json(tracks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Create a new track
// @route   POST /api/tracks
exports.createTrack = async (req, res) => {
  try {
    const { title, artist, genre, duration } = req.body;

    // Debug log
    console.log("Received POST data:", req.body);

    // Simple validation
    if (!title || !artist || !genre || duration === undefined || duration === "") {
      return res.status(400).json({ error: "All fields (title, artist, genre, duration) are required." });
    }

    const newTrack = new Track({
      title,
      artist,
      genre,
      duration: Number(duration)
    });

    const savedTrack = await newTrack.save();
    res.status(201).json(savedTrack);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// @desc    Update a track by ID
// @route   PUT /api/tracks/:id
exports.updateTrack = async (req, res) => {
  try {
    const updated = await Track.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// @desc    Delete a track by ID
// @route   DELETE /api/tracks/:id
exports.deleteTrack = async (req, res) => {
  try {
    await Track.findByIdAndDelete(req.params.id);
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
