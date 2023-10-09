const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router
  .route('/')
  .get(userController.getData)
  .post(userController.postData);

router
  .route('/:id')
  .get(userController.getDataById)
  .put(userController.updateDataById)  // Implement in controller if needed
  .delete(userController.deleteDataById);  // Implement in controller if needed

module.exports = router;
