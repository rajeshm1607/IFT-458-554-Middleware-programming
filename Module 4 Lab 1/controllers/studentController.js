const Student = require('../models/studentModel');
const APIFeatures = require('./../dataBaseManager/studentDbContext');


/**
 * getAllstudents returns all students with their detailed information
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */
exports.getAllStudents =   async (req, res) => { 
  try {
    
    const features = new APIFeatures(Student.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const students = await features.query;

   
    res.status(200).json({
      status: 'success',
      results: students.length,
      data: {
        students
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
/**
 * getstudent returns student with its detailed information
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
   

    res.status(200).json({
      status: 'success',
      results: student.length,
      data: {
        student
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

/**
 * createstudent saves new student details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.createStudent = async  (req, res) => {
  try {
  

    const newstudent = await Student.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        student: newstudent
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

/**
 * updatestudent updates details of an existing student
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        student
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

/**
 * deletestudent delete student details
 * @param {*} (req, res) - Takes request and response as an argument
 * @param {*} [optionalArg] - Returns the updated response object (with an HTTP status code and a body)
 */

exports.deleteStudents = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};