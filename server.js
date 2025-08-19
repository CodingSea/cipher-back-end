const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cloudinary = require('cloudinary').v2;
const http = require("http");
const Server = require("socket.io").Server;

const server = http.createServer(app);
const io = new Server(server, 
    {
        cors:
        {
            origin: "http://localhost:5173"
        }
    }
)

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

const authRoutes = require("./routes/authRoutes");
const Message = require("./models/Message");
app.use("/auth",authRoutes)

io.on("connection", (socket) =>
{
    console.log("Connected");

    async function loadMessages()
    {
        try
        {
            const allMessages = await Message.find().sort({createdAt: 1}).exec();
            socket.emit("Message", allMessages);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    loadMessages();

    socket.on("Message", message => 
    {
        io.emit("Message", message);
    });

    socket.on("disconnect", () =>
    {
        console.log("Disconnect");
    });
});

server.listen(process.env.PORT, () =>
{
    console.log("Listening to Port");
})