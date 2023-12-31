const express = require('express');
const router = express.Router();
const joinController = require('../controllers/joinController');
router
.route('/')
.get(joinController.getAlljoin)
.post(joinController.createNewjoin);
router
.route('/:id')
.get(joinController.getjoinByID)
.patch(joinController.patchjoinById)
.delete(joinController.deletejoinByID);
module.exports = router;
