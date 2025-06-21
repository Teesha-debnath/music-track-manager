const express = require("express");
const router = express.Router();

const {
  getAllTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controllers/trackController");

router.get("/", getAllTracks);
router.post("/", createTrack);
router.put("/:id", updateTrack);
router.delete("/:id", deleteTrack);

module.exports = router;
