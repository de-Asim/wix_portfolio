const mongoose = require("mongoose");
const msgSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    text:{
        type:String,
        required:true
    }
})

const Msg = new mongoose.model("Msg",msgSchema);
module.exports=Msg;