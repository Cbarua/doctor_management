var express = require('express');
var mongoose = require('mongoose');
var Appointments = mongoose.model('appointments');



module.exports.getAllByDoctor = function (req, res) {
    let doctor_id = req.param.doctorid;
    Restaurants.find({ doctor: doctor_id }, function (err, data) {
        if (err) {
            console.log(err);
            res.json({ 'status': 'error', 'msg': 'error coming for doctor id' + doctor_id });
        } else {
            res.json(data);
        }
    })
}
module.exports.create = function (req, res) {
    let _newAppointment = new Appointments();
    _newAppointment.date = req.body.date;
    _newAppointment.doctor = req.body.doctor;
    _newAppointment.patient_name = req.body.patient_name;
    _newAppointment.patient_phone = req.body.phone;
    _newAppointment.status = true;
    _newAppointment.save({}, function (err, data) {
        if (err) {
            res.json({ 'status': 'error', 'msg': 'error coming while booking slot.' });
        } else {
            res.json({ 'status': 'Success', 'msg': 'your appointment is booked.' });
        }
    })
}
module.exports.cancelAppointment = function (req, res) {
    //not using for this mini application
}