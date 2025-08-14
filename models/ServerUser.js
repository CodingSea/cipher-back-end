const mongoose  = require("mongoose");

const ServerUserSchema = new mongoose.Schema({
    user:[mongoose.Types.ObjectId]
    ,
     role: {
                type: String,
                enum: ['Member', 'Admin', 'Owner'] }
});

const ServerUser = module('ServerUser', ServerUserSchema);

module.exports = ServerUser;