var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Appointments = mongoose.model('appointments');
var AppointmentController = require('../controllers/appointment.controller');

router.get('/:doctorid', AppointmentController.getAllByDoctor);
router.post('/', AppointmentController.create);

module.exports = router;