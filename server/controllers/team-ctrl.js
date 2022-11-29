const teamModel = require('../models/team-model')

const getTeams =async (req,res)=>{
    await teamModel.find({})
    .then((result,err)=>{
        if (err) {
            return res.status(400).json({success:false,message:err})
        }
        if (result.length == 0 ) {
            return res.status(400).json
            ({success:false,message:"no data"})
        }
        if (result) {
            res.status(200).json({success:true,message:result})
        }
    })
    .catch((err)=>{
        return res.status(400).json({success:false,message:err})
    })
}

const addTeams = async (req , res)=>{
    await teamModel.insertMany(req.body.team)
    .then((result)=>{
        res.status(200).json({success:true , message:"add team success"})
    })
    .catch((error)=>{res.status(400).json({success:false , error})})
}

module.exports = {
    getTeams,
    addTeams
}