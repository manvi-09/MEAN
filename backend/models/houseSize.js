const mongoose = require('mongoose');
const houseSizeSchema = new mongoose.Schema({
    // Define the schema fields here
   houseSize: String
  });
  
  const HouseSize = mongoose.model('HouseSize', houseSizeSchema);
  
  module.exports = HouseSize;