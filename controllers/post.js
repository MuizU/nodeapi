const Post = require("../models/post");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().select("_id title body");
    res.json({ posts });
  } catch (error) {
    console.error(error);
  }
};

exports.createPost = async (req, res) => {
  const post = new Post(req.body);
  const result = await post.save();
  res.status(200).json({ post: result });
};
