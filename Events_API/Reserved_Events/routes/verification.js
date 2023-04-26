const express = require('express');
const router = express.Router();

const verificationController = require('../controllers/verificationControlleur');

router.get('/', verificationController.getAllverifications);
router.post('/', verificationController.createverification);
router.get('/:id', verificationController.getverificationById);
router.put('/:id', verificationController.updateverification);
router.delete('/:id', verificationController.deleteverification);

module.exports = router;
