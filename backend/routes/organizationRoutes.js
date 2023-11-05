const express = require('express');
const router = express.Router();
const Organization = require('../models/organization');

// GET all housetype data
router.get('/getData', (req, res) => {
    Organization.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error retrieving organization data' });
      });
  });


  // POST new housetype
router.post('/addData', (req, res) => {
    const newData = req.body;
    Organization.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating organization data' });
      });
  });

module.exports = router;