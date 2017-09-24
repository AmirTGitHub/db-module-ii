'use strict';

const { Service } = require('../../database/models');

module.exports = function addService(req, res) {
    const name = req.body.name
    const service = new Service({name})
    service.save().then(function(){
        res.json(service.serialize())
    })


};
