const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: 
    {
        type: String,
        required: true
    },
    profileImage: 
    {
        type: String
    },
    profileImageId:
    {
        type: String
    },
    email: 
    {
        type: String,
        required: true
    },
    password: 
    {
        type: String,
        required: true
    },
    friends: [{ type: mongoose.Types.ObjectId, ref: "User" }]

})

const User = mongoose.model('User', userSchema);

module.exports = User;