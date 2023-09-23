// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of express
const app = express();
// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Use body-parser middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));

// Create a data store for our student data
const students = require('./model/01-student');

// new code and changes
// We are going to implement all the CRUD operations in this file
// i.e. create, read, update and delete
// The GET All students route for the form students data base

app.get('/students', (req, res) => {
  let studs = [];
  studs= students.getSpecificStudent(req.query.id);
  // Render the form and pass in the current student data

  res.render('index.ejs', { studs });
});
// The GET a specific route for the form students data base
app.get('/students/:id', (req, res) => {
  // Render the form and pass in the current student data
  const id = numeric(req.query.id);
  res.render('index', { students: students.getSpecificStudent(id) });
});
// The POST route for form submissions
app.post('/students', (req, res) => {
  // Add the submitted student data to our data store
  students.addStudent(req.body);

  // Redirect back to the form
  res.redirect('/');
});

// The GET route for the form
app.put('/students/:id', (req, res) => {
  // Render the form and pass in the current student data
  let studs = [];
  studs= students.upDateStudent(req.body,req.params.id);
  res.render('index.ejs', { studs });

});

// The GET route for the form
app.delete('/students/:id', (req, res) => {
  // Render the form and pass in the current student data
  const id = req.params.id;
  res.render('index', { students: students.deleteStudent(id) });
});
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
