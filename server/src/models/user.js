const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpire: {
        type: String,
    }
})

const User=mongoose.model('User', userSchema)
module.exports=User









