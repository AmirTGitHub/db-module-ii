'use strict';

const { OrganisationService } = require('../../database/models');

module.exports = function addService(req, res) {
    const { serviceId, organisationId } = req.params;
    const organisationService = new OrganisationService({
        serviceId,
        organisationId
    })
    organisationService.save().then(function(){
        res.json(organisationService.serialize())
    })
};
