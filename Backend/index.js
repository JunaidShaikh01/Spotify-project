const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");
app.use(cors());
const port = 3000;

app.use(express.json());
app.use("/api/v1", router);

app.listen(port, () => console.log(`Server is listening at ${port}`));
