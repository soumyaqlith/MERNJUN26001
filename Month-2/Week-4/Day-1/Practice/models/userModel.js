const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
