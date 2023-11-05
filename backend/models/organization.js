const mongoose = require('mongoose');
const organizationSchema = new mongoose.Schema({
    // Define the schema fields here
   organization: String
  });
  
  const Organization = mongoose.model('Organization', organizationSchema);
  
  module.exports = Organization;