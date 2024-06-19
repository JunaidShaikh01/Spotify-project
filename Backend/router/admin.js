const express = require("express");
const adminRouter = express.Router();
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

adminRouter.use("/uploads", express.static(path.join(__dirname, "uploads")));

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

//Upload Song
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

adminRouter.post(
  "/upload",
  upload.fields([{ name: "image" }, { name: "audio" }]),
  async (req, res) => {
    console.log("Request body", req.body);
    console.log("Request file", req.files);
    if (!req.files || req.files.image || req.files.audio) {
      return res.status(400).json({
        msg: "Please upload image and audio",
      });
    }
    const imageUrl = req.files.image[0].path;
    const audioUrl = req.files.audio[0].path;
    const { name, albumName, singerName, language, category } = req.body;
    const upload = await prisma.songs.create({
      data: {
        name,
        albumName,
        singerName,
        language,
        category,
        imageUrl,
        audioUrl,
      },
    });
    res.json(upload);
  }
);
module.exports = {
  adminRouter,
};
