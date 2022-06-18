const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const UserTestSchema = new mongoose.Schema({
    // testId (ref)
    date : {
        type : Date,
        default : Date.now
    },
    testAnswer :  [{
        //  why do we need this id??
        questionId :{
            type : Number,
            required : true
        },
        answer : {
            type : boolean,
            required : true // ?
        }
    }],
    result: {
        WPM : {
            type : Number,
            required : true
        },
        STD : {
            type : Number,
            required : true
        },
        CMP : {
            type : String,
            required : true
        }   
    },
    status : {
        type : String,
        enum : [] //??
    }
})

// TODO: import connect, create fake data and check CRUD for this data.
const UserTestModel = mongoose.model('UserTest',UserTestSchema)
module.exports = {UserTestModel}

