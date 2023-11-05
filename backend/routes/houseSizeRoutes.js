const express = require('express');
const router = express.Router();
const HouseSize = require('../models/houseSize');

// GET all housetype data
router.get('/getData', (req, res) => {
    HouseSize.find()
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
    HouseSize.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating house type data' });
      });
  });


  module.exports = router;