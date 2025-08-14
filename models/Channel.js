const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema
(
    {
        title: { type: String, required: true },
        messages: [mongoose.Types.ObjectId]
    }
);

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;