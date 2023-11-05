const express = require('express');
const router = express.Router();
const EmployeeData = require('../models/employeeData');

// GET all employee data
router.get('/getData', (req, res) => {
  EmployeeData.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving housing data' });
    });
});

// GET a single employee data by ID
router.get('/getData/:id', (req, res) => {
  const id = req.params.id;
  EmployeeData.findById(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: 'Employee data not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving housing data' });
    });
});

// POST new employee data
router.post('/addData', (req, res) => {
  const newData = req.body;
  EmployeeData.create(newData)
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

  EmployeeData.findByIdAndDelete(id)
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

  EmployeeData.findByIdAndUpdate(id, newData, { new: true })
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