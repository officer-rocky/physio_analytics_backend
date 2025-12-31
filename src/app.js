const express = require("express");
const cors = require("cors");

const physioRoutes = require("./routes/physio.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", physioRoutes);

module.exports = app;
