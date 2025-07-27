const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empid: String,
    empname: String,
    department: String,
    salary: String,
});

module.exports = mongoose.model('Employee', employeeSchema);
