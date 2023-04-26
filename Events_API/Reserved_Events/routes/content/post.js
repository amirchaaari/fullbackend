const express = require('express');
const router = express.Router();

const postController = require('../../controllers/content/postController');

router.get('/', postController.getAllposts);
router.post('/', postController.createpost);
router.get('/:id', postController.getpostById);
router.put('/:id', postController.updatepost);
router.delete('/:id', postController.deletepost);

module.exports = router;
