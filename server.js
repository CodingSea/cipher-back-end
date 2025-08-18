const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cloudinary = require('cloudinary').v2;
const webSocketServer = require("websocket").server;
const http = require("http");

// middleware
app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(express.json());

cloudinary.config
({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET
});

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

/*
const server = http.createServer();
server.listen(process.env.PORT);*/

app.listen(process.env.PORT, () =>
{
    console.log("Listening to Port");
})

/*
const wsServer = new webSocketServer(
    {
        httpServer: server
    }
);

const clients = {};

wsServer.on("request", function(request)
{
    
});*/