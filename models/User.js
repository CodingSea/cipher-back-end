const {Schema,model}  = require("mongoose");

const userSchema = new Schema({

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

const User = model('User', userSchema);

module.exports = User;