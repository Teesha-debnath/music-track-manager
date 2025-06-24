const { getAllTracks } = require('../../controllers/trackController');
const Track = require('../../models/Track');

jest.mock('../../models/Track'); // Mock the Track model

describe("Unit Test: getAllTracks", () => {
  let req;
  let res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should return a list of tracks on success", async () => {
    const mockTracks = [
      { title: "Sample Track", artist: "Tester", genre: "Pop", duration: 200 }
    ];
    Track.find.mockResolvedValue(mockTracks);

    await getAllTracks(req, res);

    expect(Track.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTracks);
  });

  it("should return 500 and error message on failure", async () => {
    const errorMessage = "Database error";
    Track.find.mockRejectedValue(new Error(errorMessage));

    await getAllTracks(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});
