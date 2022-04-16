const express = require("express");
const { getPosts, createPost } = require("../controllers/post.js");
const { createPostValidator } = require('../validator');
const router = express.Router();

router.get("/", getPosts);
router.post("/posts", createPostValidator, createPost);

module.exports = router;
