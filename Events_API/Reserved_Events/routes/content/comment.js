const express = require('express');
const router = express.Router();

const commentController = require('../../controllers/content/commentController');

router.get('/', commentController.getAllcomments);
router.post('/', commentController.createcomment);
router.get('/:id', commentController.getcommentById);
router.put('/:id', commentController.updatecomment);
router.delete('/:id', commentController.deletecomment);

module.exports = router;
