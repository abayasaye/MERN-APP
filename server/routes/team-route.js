const route = require('express').Router()
const {
    getTeams,
    addTeams
} = require('../controllers/team-ctrl')

route.get('/',getTeams)
route.post("/addTeam" , addTeams)
module.exports =route;