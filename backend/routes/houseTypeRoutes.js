const express = require('express');
const router = express.Router();
const HouseType = require('../models/houseType');

// GET all housetype data
router.get('/getData', (req, res) => {
    HouseType.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error retrieving house type data' });
      });
  });


  // POST new housetype
router.post('/addData', (req, res) => {
    const newData = req.body;
    HouseType.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating house type data' });
      });
  });


// Delete by housetype
router.delete('/deleteData/:houseType', (req, res) => {
  const htype = req.params.houseType;

  HouseType.deleteMany({HouseType: htype})
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ err: 'No entries found with the specified house type' });
      }
      res.json({ message: 'Entries deleted successfully' });
    })
    .catch((error) => {
      console.error('Error deleting entries:', error);
      res.status(500).json({ err: 'Error deleting entries' });
    });
});

  
module.exports = router;