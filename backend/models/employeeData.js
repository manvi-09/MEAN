const mongoose = require('mongoose');
const employeeDataSchema = new mongoose.Schema({
    // Define the schema fields here
   organization: String,
   employeeBand: String,
   currentLocation: String
  });
  
  const EmployeeData = mongoose.model('EmployeeData', employeeDataSchema);
  
  module.exports = EmployeeData;