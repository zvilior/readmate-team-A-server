const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    
    img:{type : Image,
        required : true
    },
    questions : [ {
        title:{
            type : String,
            required : true
            },
        orderNum : {
            type : Number,
            required : true
            },
        answer : {
            type: Boolean,
            required : true
        } 
    }],
    lines : [{
        orderNum :{
            type : Number,
            required : true
        },
        letters : {
            type : Number,
            required : true
        },
    }],   
})

// TODO: import connect, create fake data and check CRUD for this data.
const TestModel = mongoose.model('Test',TestSchema)
module.exports = {TestModel}

