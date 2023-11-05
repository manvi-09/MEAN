const express = require('express');
const router = express.Router();
const EmpCreds = require('../models/empCreds');

// GET all country data
router.get('/getData', (req, res) => {
    EmpCreds.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error retrieving employee credentials' });
      });
  });


  router.get('/getData/:username', (req, res) => {
    const id = req.params.username;
    EmpCreds.findOne({username:id})
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


  // POST new country
router.post('/addData', (req, res) => {
    const newData = req.body;
    EmpCreds.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating employee credentials' });
      });
  });


// Delete by country Name
router.delete('/deleteData/:username', (req, res) => {
  const ecreds = req.params.username;

  EmpCreds.findOneAndDelete({username: ecreds})
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ err: 'No entries found with the specified email' });
      }
      res.json({ message: 'Entries deleted successfully' });
    })
    .catch((error) => {
      //console.error('Error deleting entries:', error);
      res.status(500).json({ err: 'Error deleting entries' });
    });
});


router.put('/updateData/:email', (req, res) => {
    const email = req.params.email;
    const newData = req.body;
  
    EmpCreds.findOneAndUpdate(email, newData, { new: true })
      .then((data) => {
       
        if (!data) {
          return res.status(404).json({ error: 'Data not found' });
        }
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error updating employee credentials' });
      }); 
  });
   
module.exports = router;