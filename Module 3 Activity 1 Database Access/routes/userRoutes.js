const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router
.route('/')
.get(userController.getAllUsers)
.post(userController.createNewuser);
router
.route('/:id')
.get(userController.getuserByID)
.patch(userController.patchuserById)
.delete(userController.deleteuserByID);
module.exports = router;
