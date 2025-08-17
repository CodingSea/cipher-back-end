const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema
    (
        {
            title: { type: String, required: true },
            messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }]
        }
    );

const serverSchema = new mongoose.Schema
    (
        {
            title: { type: String, required: true },
            users: [
                {
                    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
                    role: { type: String, enum: ['Member', 'Admin', 'Owner'] }
                }
            ],
            channels: [channelSchema],
            serverImage: { type: String }
        }
    );

const Server = mongoose.model("Server", serverSchema);

module.exports = Server;