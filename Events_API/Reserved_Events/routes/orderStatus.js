const express = require('express');
const router = express.Router();

const orderStatusController = require('../controllers/orderStatusControlleur');

router.get('/', orderStatusController.getAllorderStatuss);
router.post('/', orderStatusController.createorderStatus);
router.get('/:id', orderStatusController.getorderStatusById);
router.put('/:id', orderStatusController.updateorderStatus);
router.delete('/:id', orderStatusController.deleteorderStatus);

module.exports = router;
