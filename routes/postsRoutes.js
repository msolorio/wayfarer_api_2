const express = require('express');
const router = express.Router();
const { postsCtrl } = require('../controllers');

router.get('/', postsCtrl.index);
router.get('/:postId', postsCtrl.show);
router.post('/', postsCtrl.create);
router.put('/:postId', postsCtrl.update);
router.delete('/:postId', postsCtrl.remove);

module.exports = router;
