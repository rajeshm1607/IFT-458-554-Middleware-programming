const express = require('express');
const router = express.Router();
const { makeUpperCase, checkAdmin } = require('../middlewares/index');

const students = [];

const getSpecificStudent = (req, res) => {
    const id = req.params.id;

    const currentStudent = students[id]
    if(currentStudent === undefined){
        res.send(`Student with the ${id} is not found`)
    }
    res.send(`Student with the ${id} is ${currentStudent.fname} ${currentStudent.mname} ${currentStudent.lname}`);
}

const getStudents = (req, res) => {
    res.send(students);
}

const addStudent = (req, res) => {
    const student = req.body;
    students.push(student);
    res.send(`Student with the name ${student.fname} ${student.mname} ${student.lname} added to the database`);
}

const updateStudent = (req, res) => {
    const id = req.params.id;
    const student = req.body;
    students[id] = student;
    res.send(`Student with the id ${id} has been updated`);
}

const deleteStudent = (req, res) => {
    const id = req.params.id;
    const student = students[id];
    students.splice(id, 1);
    res.send(`Student with the id ${id} has been deleted`);
}

router.get('/:id', checkAdmin, getSpecificStudent);
router.get('/', getStudents);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', checkAdmin, deleteStudent);
module.exports = router ;
