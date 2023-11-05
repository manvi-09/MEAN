const mongoose = require('mongoose');
const empbandSchema = new mongoose.Schema({
    // Define the schema fields here
   empBand: String
  });
  
  const Empband = mongoose.model('Empband', empbandSchema);
  
  module.exports = Empband;