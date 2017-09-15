var express = require('express');
var mongoose = require('mongoose');
var Appointments = mongoose.model('appointments');
var Doctors = mongoose.model('doctors');

module.exports.validateAppointmentInput = function (appointment) {
    let slotExists
    new Promise(function (resolve, reject) {
        Doctors.findOne({ _id: appointment.doctor }, function (err, data) {
            if (err) {
                throw err;
            } else {
                if (data.working_days.contains(appointment.date.getDay())) {
                    resolve();
                } else {
                    reject();
                }
            }
        })
    }).then(function () {
        Appointments.findOne({ date: appointment.date, doctor: appointment.doctor }, function (err, data) {
            if (err) {
                throw err;
            } else {
                if (data == null) {
                    slotExists = true;
                    return {'status':'success'};
                } else {
                    slotExists = false;
                    return {'status':'fail','msg':'slot occupied'};
                }
            }
        })
    }).catch(() => { return { 'status': 'fail','msg':'doctor is not available on this day' } })
}