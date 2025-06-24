const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Track = require('../../models/Track');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: "test" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Integration Test: Track Model", () => {
  it("should save and retrieve a track", async () => {
    const track = new Track({
  title: "Integration Test Track",
  artist: "Dev",
  duration: 300,
  genre: "Pop"
});

    await track.save();

    const result = await Track.findOne({ title: "Integration Test Track" });
    expect(result.artist).toBe("Dev");
  });
});
