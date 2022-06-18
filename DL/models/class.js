const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const ClassSchema = new mongoose.Schema({
    // _id
    teacherId : {
        type : Number,
        required : true
    }
})

// TODO: import connect, create fake data and check CRUD for this data.
const ClassModel = mongoose.model('Class',ClassSchema)
module.exports = {ClassModel}

