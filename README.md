# 🎵 Music Track Manager

This is a full-stack project where I built an application to manage music tracks. It lets you add, edit, view, and delete tracks using a custom API I created with Node.js, Express, and MongoDB. I also built a simple frontend using React so users can easily interact with the backend.

---

## 🔧 What It Does

- Add new music tracks (title, artist, genre, duration)
- View all tracks in a list
- Edit or delete any existing track
- Everything is stored in a MongoDB database
- Tested the backend using Thunder Client

---

## 🛠 Tech Used

- **Frontend**: React.js
- **Backend**: Express.js with Node.js
- **Database**: MongoDB (via Mongoose)
- **API Testing**: Thunder Client
- **Other Tools**: Axios, nodemon, dotenv

---

## 📌 API Overview

| Method | Endpoint             | What It Does              |
|--------|----------------------|----------------------------|
| GET    | /api/tracks          | Get a list of all tracks  |
| POST   | /api/tracks          | Add a new track           |
| PUT    | /api/tracks/:id      | Update an existing track  |
| DELETE | /api/tracks/:id      | Delete a track            |

#### Example request body for adding a track:
```json
{
  "title": "Perfect",
  "artist": "Ed Sheeran",
  "genre": "Pop",
  "duration": 263
}
