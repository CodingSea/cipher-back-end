const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
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
    email:
    {
        type: String,
        required: true
    },
    passwordHash:
    {
        type: String,
        required: true
    },
    friends: [{ type: mongoose.Types.ObjectId, ref: "User" }]

})

userSchema.methods.validatePassword= function (password){
      return bcrypt.compare(password, this.passwordHash)

}

const User = mongoose.model('User', userSchema);

module.exports = User;