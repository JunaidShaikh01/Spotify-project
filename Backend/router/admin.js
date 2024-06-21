const express = require("express");
const adminRouter = express.Router();
const multer = require("multer");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const zod = require("zod");
const signinSchema = zod.object({
  adminId: zod.string().email(),
  password: zod.string(),
});

// admin Signin
adminRouter.post("/login", async (req, res) => {
  const validation = signinSchema.safeParse(req.body);

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
  res.status(200).json({
    msg: "You are logged in",
    admin,
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

adminRouter.post(
  "/upload",
  upload.fields([{ name: "image" }, { name: "audio" }]),
  async (req, res) => {
    // console.log("Request body", req.body);
    // console.log("Request file", req.files);
    try {
      const { name, albumName, singerName, language, category } = req.body;
      // const image = req.files["image"][0].filename;
      // const audio = req.files["audio"][0].filename;

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

module.exports = {
  adminRouter,
};
