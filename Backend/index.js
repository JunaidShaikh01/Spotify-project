const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
const path = require("path");
app.use(cors());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static("uploads"));
const port = 3000;

app.use(express.json());
app.use("/api/v1", router);

app.listen(port, () => console.log(`Server is listening at ${port}`));
