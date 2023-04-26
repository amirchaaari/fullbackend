const express = require('express');
const router = express.Router();

const securityNotificationController = require('../controllers/securityNotificationControlleur');

router.get('/', securityNotificationController.getAllsecurityNotifications);
router.post('/', securityNotificationController.createsecurityNotification);
router.get('/:id', securityNotificationController.getsecurityNotificationById);
router.put('/:id', securityNotificationController.updatesecurityNotification);
router.delete('/:id', securityNotificationController.deletesecurityNotification);

module.exports = router;
