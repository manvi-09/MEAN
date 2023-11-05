const express = require('express');
const router = express.Router();
const HousingData = require('../models/housingData');

// GET all housing data
router.get('/getData', (req, res) => {
  HousingData.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving housing data' });
    });
});

// GET a single housing data by ID
router.get('/getData/:id', (req, res) => {
  const id = req.params.id;
  HousingData.findById(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Housing data not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving housing data' });
    });
});

// POST new housing data
router.post('/addData', (req, res) => {
  const newData = req.body;
  HousingData.create(newData)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error creating housing data' });
    });
});

//DELETE by specific id

router.delete('/deleteData/:id', (req, res) => {
  const id = req.params.id;

  HousingData.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: 'Data not found' });
      }
      res.json({ message: 'Data deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting housing data' });
    });
});


//UPDATE by id

router.put('/updateData/:id', (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  HousingData.findByIdAndUpdate(id, newData, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: 'Data not found' });
      }
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error updating housing data' });
    }); 
});

module.exports = router;