const mongoose = require('mongoose');
const countrySchema = new mongoose.Schema({
    // Define the schema fields here
   countryName: String
  });
  
  const Country = mongoose.model('Country', countrySchema);
  
  module.exports = Country;