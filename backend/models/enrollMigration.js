const mongoose = require('mongoose');
const enrollMigrationSchema = new mongoose.Schema({

    // Define the schema fields here
 username: String,
 fromC: String,
 toC: String,
 status: Number
  });
  
  const EnrollMigration = mongoose.model('EnrollMigration', enrollMigrationSchema);
  
  module.exports =EnrollMigration;