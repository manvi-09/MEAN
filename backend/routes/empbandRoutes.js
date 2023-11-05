const express = require('express');
const router = express.Router();
const Empband = require('../models/empband');

// GET all housetype data
router.get('/getData', (req, res) => {
    Empband.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error retrieving employee band data' });
      });
  });


  // POST new housetype
router.post('/addData', (req, res) => {
    const newData = req.body;
    Empband.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating employee band data' });
      });
  });

  //update
  

module.exports = router;