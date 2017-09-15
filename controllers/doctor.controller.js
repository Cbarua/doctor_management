var express = require('express');
var mongoose = require('mongoose');
var Doctors = mongoose.model('doctors');



module.exports.getAll = function (req, res) {
    Doctors.find({}, function (err, data) {
        if (err) {
            console.log(err);
            res.json({ 'status': 'error', 'msg': 'error while fetching doctor data.' });
        } else {
            res.json(data);
        }
    })
}
module.exports.create = function (req, res) {
    let _newDoctor = new Doctors();
    _newDoctor.name = req.body.name;
    _newDoctor.address_clinic = req.body.address_clinic;
    _newDoctor.phone = req.body.phone;
    _newDoctor.working_days = req.body.working_days;
    _newDoctor.save({}, function (err, data) {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
}