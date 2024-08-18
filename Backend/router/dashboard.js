const express = require("express");
const dashboardRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const zod = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware/middleware");
const JWT_SECRET = process.env.JWT_SECRET;

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8).max(20),
  name: zod.string().min(2),
  day: zod.number().int().min(1).max(31),
  month: zod.number().int().min(1).max(12),
  year: zod.number().int().min(1900).max(2100),
  gender: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8).max(20),
});

//Getting Songs at User dashboard
dashboardRouter.get("/songs", async (req, res) => {
  try {
    const songs = await prisma.songs.findMany();
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs", error);
    res.status(500).json({
      error: "internal server error",
      error: error.message,
    });
  }
});

//user Signup
dashboardRouter.post("/signup", async (req, res) => {
  req.body.day = parseInt(req.body.day, 10);
  req.body.month = parseInt(req.body.month, 10);
  req.body.year = parseInt(req.body.year, 10);

  const validation = signupSchema.safeParse(req.body);

  try {
    if (!validation.success) {
      return res.status(400).json({
        msg: "You sent wrong inputs",
      });
    }
    const { username, password } = validation.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      return res.status(200).json({
        msg: "User already exists",
      });
    }

    const user = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
        name: validation.data.name,
        day: validation.data.day,
        month: validation.data.month,
        year: validation.data.year,
        gender: validation.data.gender,
      },
    });

    res.status(200).json({
      msg: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: `Some error has been occured ${error}`,
    });
  }
});

//User Login
dashboardRouter.post("/login", async (req, res) => {
  const validation = signinSchema.safeParse(req.body);

  try {
    if (!validation.success) {
      return res.status(400).json({
        msg: "Invalid Input",
      });
    }
    const { username, password } = validation.data;
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }
    const passwordIsMatch = await bcrypt.compare(password, user.password);
    if (!passwordIsMatch) {
      return res.status(404).json({
        msg: "Invalid Password",
      });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      msg: "Signin Successfull",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: `Some error has been occured ${error}`,
    });
  }
});

//getting user

dashboardRouter.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        id: true,
        username: true,
        name: true,
        day: true,
        month: true,
        year: true,
        gender: true,
      },
    });

    if (!user) {
      return res.status(403).json({
        msg: "User not found",
      });
    }
    res.json({ user });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: `Some error has been occured ${error}`,
    });
  }
});

//Create a new playlist
dashboardRouter.post("/playlist", authMiddleware, async (req, res) => {
  try {
    const playlist = await prisma.playlist.create({
      data: {
        name: req.body.name,
        userId: req.userId,
      },
    });
    res.json({ playlist });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: `Some error has been occured ${error}`,
    });
  }
});

//Getting all playlists from the server

dashboardRouter.get("/playlists", authMiddleware, async (req, res) => {
  try {
    const playlists = await prisma.playlist.findMany({
      where: {
        userId: req.userId,
      },
    });
    res.json({ playlists });
  } catch (error) {
    console.error("Error fetching songs", error);
    res.status(500).json({
      error: "internal server error",
      error: error.message,
    });
  }
});

dashboardRouter.get("/playlists/playlist/:id", async (req, res) => {
  try {
    const playlist = await prisma.playlist.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(playlist);
  } catch (error) {
    console.error("Error fetching songs", error);
    res.status(500).json({
      error: "Something went wrong",
      error: error.message,
    });
  }
});

//Adding Songs In Playlist
dashboardRouter.post(
  "/playlist/:playlistId/add-song",
  authMiddleware,
  async (req, res) => {
    try {
      const playlist = await prisma.playlist.findUnique({
        where: {
          id: parseInt(req.params.playlistId),
          userId: req.userId,
        },
      });
      if (!playlist) {
        return res.status(404).json({
          msg: "Playlist not found",
        });
      }
      const song = await prisma.songs.findUnique({
        where: {
          id: parseInt(req.body.songId),
        },
      });
      if (!song) {
        return res.status(404).json({
          msg: "Song not found",
        });
      }

      const existingEntry = await prisma.playlistSongs.findUnique({
        where: {
          playlistId_songId: {
            playlistId: parseInt(req.params.playlistId),
            songId: parseInt(req.body.songId),
          },
        },
      });

      if (existingEntry) {
        return res.json({
          msg: "Song already exists in the playlist, skipping addition.",
        });
      }

      await prisma.playlistSongs.create({
        data: {
          playlistId: parseInt(req.params.playlistId),
          songId: parseInt(req.body.songId),
        },
      });
      res.json({ msg: "Song added successfully" });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        msg: `Some error has been occured ${error}`,
      });
    }
  }
);

// Assuming you have `dashboardRouter` defined

dashboardRouter.get("/playlistSongs", async (req, res) => {
  try {
    const playlistId = parseInt(req.query.playlistId); // Parse playlistId from query params
    if (isNaN(playlistId)) {
      return res.status(400).json({ error: "Invalid playlistId" });
    }

    const playlistSongs = await prisma.playlistSongs.findMany({
      where: {
        playlistId: playlistId,
      },
      include: {
        song: {
          select: {
            id: true,
            name: true,
            image: true,
            singerName: true,
            albumName: true,
          },
        },
      },
    });

    const songs = playlistSongs.map((ps) => ps.song);
    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs", error);
    res.status(500).json({
      error: "Internal server error",
      errorMessage: error.message,
    });
  }
});


module.exports = {
  dashboardRouter,
};
