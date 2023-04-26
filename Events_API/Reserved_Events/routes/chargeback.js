const express = require('express');
const router = express.Router();

const chargebackController = require('../controllers/chargebackController');

router.get('/', chargebackController.getAllchargebacks);
router.post('/', chargebackController.createchargeback);
router.get('/:id', chargebackController.getchargebackById);
router.put('/:id', chargebackController.updatechargeback);
router.delete('/:id', chargebackController.deletechargeback);

module.exports = router;
