const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema
    (
        {
            title: { type: String, required: true },
            messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }]
        }
    );

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;