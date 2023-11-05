const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors=require('cors');

const mongoose = require('mongoose');


const app = express();
const upload = multer({ dest: 'uploads/' });
const port = 3000;



app.use(bodyParser.json());
app.use(cors(
  {
    origin: "http://localhost:4200"
  }
));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Set the header to allow requests with credentials
  next();
});

const route_housing = require('./routes/housingDataRoutes')
app.use('/api/housingData' , route_housing)

const route_employee = require('./routes/employeeDataRoutes')
app.use('/api/employeeData' , route_employee)

const route_country = require('./routes/countryRoutes')
app.use('/api/country' , route_country)

const route_htype = require('./routes/houseTypeRoutes')
app.use('/api/houseType' , route_htype)
 
const route_hsize = require('./routes/houseSizeRoutes')
app.use('/api/houseSize' , route_hsize)

const route_organization = require('./routes/organizationRoutes')
app.use('/api/organization' , route_organization)

const route_empband = require('./routes/empbandRoutes')
app.use('/api/empband' , route_empband)

const route_empcreds = require('./routes/empCredsRoutes')
app.use('/api/empcreds' , route_empcreds)

const route_bulkdata = require('./routes/bulkDataRoutes')
app.use('/api/bulkdata' , route_bulkdata)

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/housingApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });