const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const UserSchema = new mongoose.Schema({
    userDetails : {
        firstName :{
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        dob : {
            type : Date,
            required : true
        },        
        email : {
            type : String,
            unique : true
        },
        password : {
            type : String,
            select : false,
            required : true
        },
        level : {
            type : String,
            enum : ["student", "high-school", "other"]
        },
        classId : {
            type: Number,
            required : true
        },
        Permissions : {
        // [admin, teacher, viewer] ??
        }            
        },
    TF : [{
        Value :{
            type : Number,
            required : true // what about first time??
        },
        Date : {
            type : Date,
            default : Date.now
        }
        }],
    TR: [{
        // _id
        Value :{
            type : Number,
            required : true // what about first time??
        },
        Date : {
            type : Date,
            default : Date.now
        }
        }],
    calibration : {
        type : String ,//?? maybe x and y 
        required : true // what about first time??
    }
        
})

// TODO: import connect, create fake data and check CRUD for this data.
const UserModel = mongoose.model('User',UserSchema)
module.exports = {UserModel}

