const express = require('express');
const router = express.Router();
const Country = require('../models/country');

// GET all country data
router.get('/getData', (req, res) => {
    Country.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error retrieving country data' });
      });
  });


  // POST new country
router.post('/addData', (req, res) => {
    const newData = req.body;
    Country.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating country data' });
      });
  });


// Delete by country Name
router.delete('/deleteData/:countryName', (req, res) => {
  const cname = req.params.countryName;

  Country.deleteMany({countryName: cname})
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ err: 'No entries found with the specified countryName' });
      }
      res.json({ message: 'Entries deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting entries:', error);
      res.status(500).json({ err: 'Error deleting entries' });
    });
});

  
module.exports = router;