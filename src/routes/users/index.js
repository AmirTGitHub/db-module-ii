const express = require('express');
const addUser = require('./addUser');
const linkUser = require('./linkUser');
const router = express.Router();

const PATH = '/users';

router.post(PATH, addUser);
router.patch(`${PATH}/:userId/link-to/:organisationId`, linkUser);

module.exports = router;