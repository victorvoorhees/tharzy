const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    res.send(JSON.stringify(posts, null, 2));
});

module.exports = router;