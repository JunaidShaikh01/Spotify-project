const express = require("express");
const { adminRouter } = require("./admin");
const { dashboardRouter } = require("./dashboard");
const router = express.Router();
router.use("/admin", adminRouter);
router.use("/dashboard", dashboardRouter);

module.exports = router;
