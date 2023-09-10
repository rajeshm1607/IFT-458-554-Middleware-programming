// Import the required modules

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// Create an instance of express
const app = express();
// we use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
// Set the view engine to ejs
 app.set('view engine', 'ejs'); 
 app.set('views', path.join(__dirname, 'views'));
console.log('views', path.join(__dirname, 'views'));
 // Create a data store for our student data
 let students = [];
 // The GET route for the form
  app.get('/LoadStudentRecords', (req, res) => {
   res.render('index',{students:students});
  });

app.post('/AddDataforStudents', (req, res) => {
students.push(req.body);
res.redirect('/LoadStudentRecords');
});
// Start the server on port 7007 
app.listen(7007 , () => {
console.log('Server is running on port 7007 ');
37 });