const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../app');
const Track = require('../../models/Track');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri(); 
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Track.deleteMany(); 
});

describe("GET /api/tracks", () => {
  it("should return an array", async () => {
    // insert dummy data
    await Track.create({
      title: "Test Song",
      artist: "Test Artist",
      genre: "Rock",
      duration: 180,
    });

    const res = await request(app).get("/api/tracks");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe("Test Song");
  });
});
