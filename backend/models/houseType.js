const mongoose = require('mongoose');
const houseTypeSchema = new mongoose.Schema({
    // Define the schema fields here
   houseType: String
  });
  
  const HouseType = mongoose.model('HouseType', houseTypeSchema);
  
  module.exports = HouseType;