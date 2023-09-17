const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
router
.route('/')
.get(orderController.getAllOrders)
.post(orderController.createNeworder);
router
.route('/:id')
.get(orderController.getorderByID)
.patch(orderController.patchorderById)
.delete(orderController.deleteorderByID);
module.exports = router;
