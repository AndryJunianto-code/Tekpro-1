const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const { UploadImage } = require("../utils/UploadImage");
const parser = require("../utils/cloudinary");

router.post("/image", parser.single("image"), UploadImage);
//get all post
router.get("/", async (req, res) => {
  let posts;
  try {
    posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one specific post
router.get("/:postId", async (req, res) => {
  let post;
  try {
    post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//make a post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post action, liked, bookmarked
router.put("/like", async (req, res) => {
  const action = req.query.action;

  try {
    let updatedPost;
    let updatedUser;
    if (action == "like") {
      updatedPost = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $inc: {
            numOfLike: 1,
          },
        },
        { new: true }
      );
      await User.findOneAndUpdate(
        { userId: req.body.userId },
        {
          $push: {
            likedPosts: req.body.postId,
          },
        },
        { new: true }
      );
    } else if (action == "dislike") {
      updatedPost = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $inc: {
            numOfLike: -1,
          },
        },
        { new: true }
      );
      await User.findOneAndUpdate(
        { userId: req.body.userId },
        {
          $pull: {
            likedPosts: req.body.postId,
          },
        },
        { new: true }
      );
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
