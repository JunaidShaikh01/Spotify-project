const express = require("express");
const adminRouter = express.Router();
const multer = require("multer");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const zod = require("zod");
const { authMiddleware } = require("../middleware/middleware");
const signinSchema = zod.object({
  adminId: zod.string().email(),
  password: zod.string(),
});

// admin Signin
adminRouter.post("/login", async (req, res) => {
  const validation = signinSchema.safeParse(req.body);
  try {
    if (!validation.success) {
      return res.status(400).json({
        msg: "You sent wrong inputs",
      });
    }
    const { adminId, password } = validation.data;

    const admin = await prisma.admin.findUnique({
      where: {
        adminId: adminId,
      },
    });
    if (!admin) {
      return res.status(404).json({
        msg: "Admin Not found",
      });
    }
    if (admin.password !== password) {
      return res.status(404).json({
        msg: " Password does not match",
      });
    }

    const token = jwt.sign({ adminId: admin.id }, JWT_SECRET);
    res.status(200).json({
      msg: "You are logged in",
      admin,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      msg: `Some error has been occured ${error}`,
    });
  }
});



//Multer for uploading the songs to the server
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });



//uploading the file to the server
adminRouter.post(
  "/upload",
  authMiddleware,
  upload.fields([{ name: "image" }, { name: "audio" }]),
  async (req, res) => {
    // console.log("Request body", req.body);
    // console.log("Request file", req.files);
    try {
      const { name, albumName, singerName, language, category, duration } =
        req.body;

      const audio = req.files["audio"] ? req.files["audio"][0] : null;
      const image = req.files["image"] ? req.files["image"][0] : null;

      // Log incoming data for debugging
      // console.log("Request Body:", req.body);
      // console.log("Uploaded Files:", req.files);

      if (!audio || !image) {
        throw new Error("Audio or image file missing");
      }

      const song = await prisma.songs.create({
        data: {
          name,
          albumName,
          singerName,
          language,
          category,
          image: image.path,
          audio: audio.path,
          duration,
        },
      });

      res.status(201).json(song);
    } catch (error) {
      console.error("Error processing upload:", error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  }
);


//Geting songs from the server
adminRouter.get("/songs", async (req, res) => {
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



//Uplode Songs
adminRouter.put("/update", async (req, res) => {
  const { id, name, albumName, singerName, language, category } = req.body;
  const updatedSong = await prisma.songs.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      albumName: albumName,
      singerName: singerName,
      language: language,
      category: category,
    },
  });
  res.status(200).json({
    msg: "Song Updated",
    updatedSong,
  });
});


//Delete the Sings
adminRouter.delete("/delete/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10); // Parse the id to an integer
  const deletedSong = await prisma.songs.delete({ where: { id: parsedId } });
  res.status(200).json({ msg: "Song Deleted", deletedSong });
});
module.exports = {
  adminRouter,
};
