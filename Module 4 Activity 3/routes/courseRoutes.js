const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.route('/')
    //.get(loanController.getLoan)
    .get(courseController.getAllcourses)
    .post(courseController.createCourse)

router.route('/:id')
    .get(courseController.getcourse)
    .put(courseController.updateCourse)
    .delete(courseController.deletCourse);

module.exports = router;
