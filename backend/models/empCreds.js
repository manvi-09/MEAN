const mongoose = require('mongoose');
const empCredsSchema = new mongoose.Schema({
    // Define the schema fields here
   username:{
    unique:true,
    type:String
   },
   email: String,
   pwd: String,
   role: String
  });
  
  const EmpCreds = mongoose.model('EmpCreds', empCredsSchema);
  
  module.exports = EmpCreds;