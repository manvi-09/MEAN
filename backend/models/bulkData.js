const mongoose = require('mongoose');
const bulkDataSchema = new mongoose.Schema({

    // Define the schema fields here
   username:String,
   email:String,
   organization: String,
   employeeBand: String,
   currentLocation: String,
   country: String, 
   county:String, 
   area: String, 
   houseType: String, 
   houseSize: String, 
   cost: String, 
   rent:String,
   rentTenure: String,
   role: String,
   selectedFile: Buffer
   
  });
  
  const BulkData = mongoose.model('BulkData', bulkDataSchema);
  
  module.exports =BulkData;