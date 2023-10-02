const Student = require('../models/studentModel');
exports.getData = async (req, res) => {
    const students = await Student.find();
    res.status(200).json({
      status: 'success',
      results: students.length,
      data: {
        students
      }
    });
  };
  
exports.getDataById = async (req, res) => {
  const {id} = req.params;
  const students = await Student.find({_id: id});
  res.status(200).json({
    status: 'success',
    results: students.length,
    data: {
      students
    }
  });
};

exports.postData = async (req, res) => {
  const newStudent = req.body;
  const student = await Student.create(newStudent);
  res.status(201).json({
    status: 'success',
    data: student
  });
};

exports.updateDataById = (req, res) => res.send('Hello world! from student PUT');
exports.patchDataById = (req, res) => res.send('Hello world! from student PATCH');
exports.deleteDataById = (req, res) => res.send('Hello world! from student DELETE');