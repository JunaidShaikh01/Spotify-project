const express = require("express");
const adminRouter = express.Router();
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
      msg: "You send wrong inputs",
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

module.exports = {
  adminRouter,
};
