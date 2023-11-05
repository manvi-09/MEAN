const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');
const path = require('path');
const BulkData = require('../models/bulkData');

// GET all housetype data

router.get('/getData/:username', (req, res) => {
  const id = req.params.username;
  BulkData.findOne({username:id})
    .then((data) => {
      if (data) {
        res.json(data);  
      } else {
        res.status(404).json({ error: 'Employee data not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving employee bulk data' });
    });
});

router.get('/download/:username', (req, res) => {
  const id = req.params.username;
  BulkData.findOne({ username: id })
    .then((data) => {
      if (data && data.selectedFile) {
        const fileData = Buffer.from(data.selectedFile.buffer);
        const blob = new Blob([fileData], { type: 'image/jpeg' });
        res.setHeader('Content-Disposition', 'attachment; filename=image.jpeg');
        res.contentType('image/jpeg');
        res.send(blob);
      } else {
        res.status(404).json({ error: 'File not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving file' });
    });
});
router.get('/getData', (req, res) => {
    BulkData.find()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error retrieving bulk data' });
      });
  });


  // POST new housetype
router.post('/addData', (req, res) => {
    const newData = req.body;
    BulkData.create(newData)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error creating bulk data' });
      });
  });


  
  router.put('/updatedata/:username',upload.single('selectedFile'), async (req, res) => {
    
    try {
      const username = req.params.username;
      const newData = req.body;
      const fileData = fs.readFileSync(req.file.path);
      const fileBuffer = Buffer.from(fileData);
      newData.selectedFile = fileBuffer;
      const data = await BulkData.findOneAndUpdate({ username }, newData, { new: true });
      console.log(data);
      if (!data) {
        console.log('I am here');
        return res.status(404).json({ error: 'Data not found' });
      }
  
      res.json(data);
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).json({ error: 'Error updating data' });
    }
  });
  //updata data
  router.put('/updateData/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
 
    BulkData.findByIdAndUpdate(id, newData, { new: true })
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


