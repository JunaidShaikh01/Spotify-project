const express = require("express");
const dashboardRouter = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

module.exports = {
  dashboardRouter,
};
