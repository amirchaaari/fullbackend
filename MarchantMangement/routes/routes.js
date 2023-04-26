const express = require('express');
const router = express.Router();

const marchantController = require('../controller/marchant');

router.get('/', marchantController.getAllmarchants);
router.post('/', marchantController.createmarchant);
router.get('/:id', marchantController.getmarchantById);
router.put('/:id', marchantController.updatemarchant);
router.delete('/:id', marchantController.deletemarchant);

module.exports = router;
