const express = require('express');
const router = express.Router();

const messageController = require('../../controllers/content/messageController');

router.get('/', messageController.getAllmessages);
router.post('/', messageController.createmessage);
router.get('/:id', messageController.getmessageById);
router.put('/:id', messageController.updatemessage);
router.delete('/:id', messageController.deletemessage);

module.exports = router;
