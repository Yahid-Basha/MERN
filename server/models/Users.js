const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
},{collection:'Users'})

const UserModel = mongoose.model("Users",UserSchema)
module.exports = UserModel