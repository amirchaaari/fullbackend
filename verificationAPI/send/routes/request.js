const express = require('express');
const router = express.Router();

const request = require('../controllers/request');

router.get('/', request.getAllrequests);
router.post('/', request.createreqsuestDecision);
router.get('/:id', request.getrequestById);
router.put('/:id', request.updaterequest);
router.delete('/:id', request.deleterequest);

module.exports = router;
