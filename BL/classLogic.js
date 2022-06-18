const classController = require("DL/controllers/classController.js");

exports.getClass=()=>{
    return classController.read({})
}