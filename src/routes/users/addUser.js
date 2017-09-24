'use strict' ;

const {User} = require ('../../database/models')

module.exports = function addUser(req , res){
    const name = req.body.name
     const user = new User({name})
     user.save().then( function(){
         res.json(user.serialize())
     })
}