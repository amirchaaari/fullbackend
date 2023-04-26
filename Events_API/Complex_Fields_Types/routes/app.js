const express = require('express');
const router = express.Router();

const appController = require('../controllers/appController');

router.get('/', appController.getAllApps);
router.post('/', appController.createApp);
router.get('/:id', appController.getAppById);
router.put('/:id', appController.updateApp);
router.delete('/:id', appController.deleteApp);

module.exports = router;
