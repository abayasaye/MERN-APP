const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const shoesSchema = new Schema ({
    id:{type:Number},
    shoesType:{type:String},
    company:{type:String},
    model:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    isShort:{type:Boolean},
    isDrift:{type:Boolean},
    img:{type:String}
})

module.exports = mongoose.model("shoes" , shoesSchema)