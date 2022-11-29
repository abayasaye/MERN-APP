const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const clothsSchema = new Schema({
    id:{type:Number},
    FabricType:{type:String},
    gender:{type:String},
    company:{type:String},
    model:{type:String},
    quantity:{type:Number},
    isShort:{type:Boolean},
    isDrift:{type:Boolean},
    img:{type:String}


})
module.exports = mongoose.model("cloths" , clothsSchema)