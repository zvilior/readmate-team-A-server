const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const UserTrainReadingSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    srcSound : {}, //????
    // in answers: each pushup has its own questions??
    // answers : [{x4{question, answer}},{},{},{}
// ,Type : Enum[pushup, level]]
    
    
    TR_Value : {
        type : Number,
        required : true
    }
})

// TODO: import connect, create fake data and check CRUD for this data.
const UserTrainReadingModel = mongoose.model('UserTrainReading',UserTrainReadingSchema)
module.exports = {UserTrainReadingModel}

