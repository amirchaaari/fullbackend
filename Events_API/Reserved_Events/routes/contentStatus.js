const express = require('express');
const router = express.Router();

const contentStatusController = require('../controllers/contentStatusController');

router.get('/', contentStatusController.getAllcontentStatuss);
router.post('/', contentStatusController.createcontentStatus);
router.get('/:id', contentStatusController.getcontentStatusById);
router.put('/:id', contentStatusController.updatecontentStatus);
router.delete('/:id', contentStatusController.deletecontentStatus);

module.exports = router;
