const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    
    img:{
        type : String,
        required : true
    },
    words :{
        type : Number,
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
        chars : {
            type : Number,
            required : true
        },
    }],
    level : {
        type:Number,
        enum: [7,10]
    }   
})

module.exports =  mongoose.model('test',TestSchema)


