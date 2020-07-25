const express = require('express');

const route = express.Router();

const timecontrollers = require('../controllers/timestamp');

route.get('/stamp', timecontrollers.gettimestamp);

route.get('/values', timecontrollers.passtoreact);


module.exports = route;