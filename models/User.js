const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({

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

const User = mongoose.model('User', userSchema);

module.exports = User;