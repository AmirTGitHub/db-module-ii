'use strict';

const {ContactUserOrganisation} = require('../../database/models')

module.exports = function (req , res){
    const {userId , organisationId} = req.params
    const newUser =  new ContactUserOrganisation({
        userId,
        organisationId
    }) 
    newUser.save().then(function(){
        res.json(newUser.serialize())
    })
}