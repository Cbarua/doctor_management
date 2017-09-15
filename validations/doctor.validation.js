var express = require('express');
var mongoose = require('mongoose');
var Doctors = mongoose.model('doctors');


module.exports.doctorValidation = function (doctor) {
    if(doctor.name==null|| doctor.name==undefined){
        return {'status':'fail','msg':'empty name'};
    }else if(doctor.address_clinic==null|| doctor.address_clinic== undefined){
        return {'status':'fail','msg':'empty address'};
    }else if(doctor.working_days.length==0){
        return {'status':'fail','msg':'empty working day'};
    }else if(doctor.slots.length==0){
        return {'status':'fail','msg':'empty slot'};
    }else{
        return {'status':'success'};
    }
}