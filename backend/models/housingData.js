const mongoose = require('mongoose');
const housingDataSchema = new mongoose.Schema({
  // Define the schema fields here
  country: String,
  county: String,
  area: String,
  houseType: String,
  houseSize: String,
  cost: Number,
  rent: Number,
  rentTenure: String
});

const HousingData = mongoose.model('HousingData', housingDataSchema);

module.exports = HousingData;