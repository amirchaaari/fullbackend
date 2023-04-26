const express = require('express');
const router = express.Router();

const deviceController = require('../controller/device');

router.get('/', deviceController.getAlldevices);
router.post('/', deviceController.createdevice);
router.get('/:id', deviceController.getdeviceById);
router.put('/:id', deviceController.updatedevice);
router.delete('/:id', deviceController.deletedevice);

module.exports = router;
