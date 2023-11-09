const express = require('express');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');


// Set up multer storage for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); // Specify the directory where the uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use the original file name for the uploaded file
    }
  });

  
const upload = multer({ storage: storage });


// Define the route for uploading the Excel file
router.post('/uploadExcelFile', upload.single('uploadfile'), (req, res) => {
    const file = req.file;
  
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    // Read the Excel file
    const workbook = xlsx.readFile(file.path);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(worksheet);
  
    
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = 'housingApp';
  
    MongoClient.connect(url, function (err, client) {
      if (err) {
        console.log('Error connecting to MongoDB:', err);
        return res.status(500).json({ error: 'Error connecting to MongoDB' });
      }
  
      const db = client.db(dbName);
      const collection = db.collection('bulkdatas'); 
  
      collection.insertMany(data, function (err, result) {
        if (err) {
          console.log('Error storing data in MongoDB:', err);
          return res.status(500).json({ error: 'Error storing data in MongoDB' });
        }
  
        console.log('Data stored in MongoDB:', result);
        res.status(200).json({ message: 'Data stored in MongoDB' });
      });
    });
  });
  
  module.exports = router;