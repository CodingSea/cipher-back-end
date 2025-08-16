const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema
(
    {
        title: {type: String, required: true},
        users: [
            {
                user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
                role: { type: String, enum: ['Member', 'Admin', 'Owner'] }
            }
        ],
        channels: [{type: mongoose.Types.ObjectId, ref: "Channel"}]
    }
);

const Server = mongoose.model("Server", serverSchema);

module.exports = Server;