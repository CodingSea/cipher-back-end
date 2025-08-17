const mongoose = require("mongoose");

const dmSchema = new mongoose.Schema
    (
        {
            messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
            users: [{ type: mongoose.Types.ObjectId, ref: "User" }]
        }
    );

const DM = mongoose.model("DM", dmSchema);

module.exports = DM;