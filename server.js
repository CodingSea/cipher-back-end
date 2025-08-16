const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(express.json());

mongoose.connect(process.env.DB);
mongoose.connection.on("connected", () =>
{
    console.log("Connected to DB");
})

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);
const serverRoutes = require("./routes/serverRoutes");
app.use("/server", serverRoutes);
const channelRoutes = require("./routes/channelRoutes");
app.use("/server/:serverId/channel", channelRoutes);


app.listen(process.env.PORT, () =>
{
    console.log("Listening to Port");
})