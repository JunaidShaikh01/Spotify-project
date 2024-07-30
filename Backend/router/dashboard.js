const express = require("express");
const dashboardRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const zod = require("zod");
const bcrypt = require("bcrypt");

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8).max(20),
  name: zod.string().min(2),
  day: zod.number().int().min(1).max(31),
  month: zod.number().int().min(1).max(12),
  year: zod.number().int().min(1900).max(2100),
  gender: zod.string(),
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
  console.log("Validation", validation.success);
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

module.exports = {
  dashboardRouter,
};
