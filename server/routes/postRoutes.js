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
    posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get recently posted post with limit
router.get("/postWithLimit", async (req, res) => {
  let posts;
  try {
    posts = await Post.find().sort({ createdAt: -1 }).limit(2);
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

//find posts published by owner
router.get("/author/:userId", async (req, res) => {
  let post;
  try {
    post = await Post.find({ authorId: req.params.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find post by title
router.get("/search/:title", async (req, res) => {
  let posts;
  try {
    posts = await Post.find({
      title: { $regex: req.params.title, $options: "i" },
    }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find post by title
router.get("/tag/:tagName", async (req, res) => {
  let posts;
  try {
    posts = await Post.find({
      tags: {
        $in: req.params.tagName,
      },
    }).sort({ createdAt: -1 });
    res.status(200).json(posts);
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

//post action, liked
router.put("/like", async (req, res) => {
  const action = req.query.action;

  try {
    let updatedPost;
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

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post action, liked
router.put("/bookmark", async (req, res) => {
  const action = req.query.action;

  try {
    let updatedPost;

    if (action == "bookmark") {
      updatedPost = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $push: {
            userIdBookmarked: req.body.userId,
            bookmarkListId: req.body.bookmarkListId,
          },
        },
        { new: true }
      );
    } else if (action == "disbookmark") {
      updatedPost = await Post.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: {
            userIdBookmarked: req.body.userId,
            bookmarkListId: req.body.bookmarkListId,
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

//increase num of view
router.put("/view", async (req, res) => {
  try {
    let updatedPost = await Post.findByIdAndUpdate(
      req.body.postId,
      {
        $inc: {
          numOfView: 1,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//increase num of comment
router.put("/comment", async (req, res) => {
  try {
    let updatedPost = await Post.findByIdAndUpdate(
      req.body.postId,
      {
        $inc: {
          numOfComment: 1,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete
router.delete("/delete/:postId", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
