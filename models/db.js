var mongoose = require('mongoose');
var secrets = require('../config/secret');
var Schema = mongoose.Schema;
var dbURI = secrets.dbUri;

mongoose.connect(dbURI, { useMongoClient: true });
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});



var doctorSchema = new mongoose.Schema({
    name: { type: String },
    address_clinic: { type: String },
    phone: { type: String },
    working_days:[],
    slots:[]
});
mongoose.model('doctors', doctorSchema);

var appointmentSchema = new mongoose.Schema({
    date: { type: Date },
    doctor: { type: Schema.Types.ObjectId, ref: 'doctors' },
    patient_name: { type: String },
    patient_phone: { type: String },
    status: { type: Boolean }
});
mongoose.model('appointments', doctorSchema);