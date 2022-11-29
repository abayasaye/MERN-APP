const mongoose = require('mongoose')

const schema = mongoose.Schema

const Team = new schema({
    id:{type:Number,required:true},
    nameTeam:{type:String,required:true},
})

module.exports = mongoose.model('Team',Team)
