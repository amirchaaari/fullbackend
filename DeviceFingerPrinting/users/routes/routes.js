const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.get('/', userController.getAllusers);
router.post('/', userController.createuser);
router.get('/:id', userController.getuserById);
router.put('/:id', userController.updateuser);
router.delete('/:id', userController.deleteuser);

module.exports = router;
