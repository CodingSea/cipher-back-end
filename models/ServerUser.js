const mongoose  = require("mongoose")

const ServerUserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    profileImage:{
        type:String
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    friends:[mongoose.Types.ObjectId]

})

const ServerUser = module('ServerUser', ServerUserSchema)

module.exports = Server