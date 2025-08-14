const mongoose = require("mongoose");

const dmSchema = new mongoose.Schema
(
    {
        messages: [mongoose.Types.ObjectId],
        users: [mongoose.Types.ObjectId]
    }
);

const DM = mongoose.model("DM", dmSchema);

module.exports = DM;