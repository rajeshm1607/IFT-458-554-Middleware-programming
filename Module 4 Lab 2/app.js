const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

// Sample data for testing
const students = [
  { id: 1, name: 'John', age: 20, email: 'john@example.com' },
  { id: 2, name: 'Jane', age: 22, email: 'jane@example.com' },
];

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Define routes

// Render the "Create New Student" form
app.get('/students/new', (req, res) => {
  res.render('partials/new-student.ejs');
});

// Handle the form submission to create a new student
app.post('/students', (req, res) => {
    // Retrieve form data from the request body
    const { name, age, email } = req.body;
  
    // Generate a unique ID for the new student (you can use a database-generated ID)
    const newStudentId = students.length + 1;
  
    // Create a new student object
    const newStudent = {
      id: newStudentId,
      name,
      age,
      email,
    };
  
    // Add the new student to the array
    students.push(newStudent);
  
    // Redirect to the list of students or display a success message
    res.redirect('/students');
  });
  
// Render the "List of Students" view
app.get('/students', (req, res) => {
  res.render('partials/list-students.ejs', { students });
});

// Render the "Edit Student" form for a specific student
app.get('/students/:id', (req, res) => {
  // Find the student by ID from your data source (e.g., database)
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);
  if (!student) {
    return res.status(404).send('Student not found');
  }
  res.render('partials/edit-student.ejs', { student });
});
// Handle the form submission to update an existing student
app.put('/students/:id', (req, res) => {
    // Find the student by ID from your data source (e.g., database)
    const studentId = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentId);
  
    // If the student is not found, return a 404 error
    if (!student) {
      return res.status(404).send('Student not found');
    }
  
    // Update the student's information based on the form data
    student.name = req.body.name;
    student.age = req.body.age;
    student.email = req.body.email;
  
    // Redirect to the list of students or display a success message
    res.redirect('/students');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
