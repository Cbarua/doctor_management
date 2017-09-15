var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var Doctor = mongoose.model('doctors');
var DoctorController = require('../controllers/doctor.controller');

router.get('/', DoctorController.getAll);
router.post('/', DoctorController.create);

module.exports = router;