const express = require('express');
const router = express.Router();
const EnrollMigration = require('../models/enrollMigration');

// GET all country data
router.get('/getData', (req, res) => {
    EnrollMigration.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error country migration data' });
      });
  });


  // POST new country
router.post('/addData', (req, res) => {
    const newData = req.body;
    EnrollMigration.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating country migration data' });
      });
  });

  
module.exports = router;