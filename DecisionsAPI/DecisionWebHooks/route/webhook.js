const express = require('express');
const router = express.Router();

const webhooks = require('../controllers/webhooks');

router.get('/', webhooks.getAllwebhookss);
router.post('/', webhooks.createreqsuestDecision);
router.get('/:id', webhooks.getwebhooksById);
router.put('/:id', webhooks.updatewebhooks);
router.delete('/:id', webhooks.deletewebhooks);

module.exports = router;