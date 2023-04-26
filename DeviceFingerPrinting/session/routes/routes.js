const express = require('express');
const router = express.Router();

const sessionController = require('../controller/session');

router.get('/', sessionController.getAllsessions);
router.post('/', sessionController.createsession);
router.get('/:id', sessionController.getsessionById);
router.put('/:id', sessionController.updatesession);
router.delete('/:id', sessionController.deletesession);

module.exports = router;
