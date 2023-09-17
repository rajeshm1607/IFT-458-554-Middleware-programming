
 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const app1 = express();
 
// // Middleware
 app1.use(bodyParser.json());
 app1.use(bodyParser.urlencoded({ extended: true }));

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); // this line has to come first since
const app = require('./app');
const port = process.env.PORT || 3000;

app1.get('/', (req, res) => {
  res.send('Hello, this is an server route.');
});

app1.listen(port, () => {
  console.log(`App running on port ${port}...`);
  });
  
