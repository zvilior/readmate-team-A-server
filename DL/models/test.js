const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    
    img:{
        type : String,
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

module.exports =  mongoose.model('test',TestSchema)


