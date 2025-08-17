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

const usersRoutes = require("./routes/usersRoutes");
app.use("/user", usersRoutes);
const serverRoutes = require("./routes/serverRoutes");
app.use("/server", serverRoutes);
const dmRoutes = require("./routes/dmRoutes");
app.use("/dm",dmRoutes);
const messageRoutes = require("./routes/messageRoutes");
app.use("/message",messageRoutes)

app.listen(process.env.PORT, () =>
{
    console.log("Listening to Port");
})