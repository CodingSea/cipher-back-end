const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema
(
    {
        title: {type: String, required: true},
        serverUsers: [mongoose.Types.ObjectId],
        channels: [mongoose.Types.ObjectId]
    }
);

const Server = mongoose.model("Server", serverSchema);

module.exports = Server;