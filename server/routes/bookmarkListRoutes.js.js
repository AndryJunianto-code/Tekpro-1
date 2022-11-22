const router = require("express").Router();
const BookmarkList = require("../models/BookmarkList");

//create list
router.post("/", async (req, res) => {
  const newList = new BookmarkList(req.body);
  try {
    const savedList = await newList.save();
    res.status(200).json(savedList);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one bookmark
router.get("/b/:bookmarkId", async (req, res) => {
  try {
    const lists = await BookmarkList.findById(req.params.bookmarkId);
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const lists = await BookmarkList.find({
      userId: req.params.userId,
    });
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json(err);
  }
});

//add post to bookmark
router.put("/:bookmarkId", async (req, res) => {
  try {
    const lists = await BookmarkList.findByIdAndUpdate(
      req.params.bookmarkId,
      {
        $push: {
          posts: req.body.post,
          postsId: req.body.postId,
        },
      },
      { new: true }
    );
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json(err);
  }
});

//remove post from bookmark
router.put("/remove/:bookmarkId", async (req, res) => {
  try {
    const lists = await BookmarkList.findByIdAndUpdate(
      req.params.bookmarkId,
      {
        $pull: {
          posts: {
            _id: req.body.postId,
          },
          postsId: req.body.postId,
        },
      },
      { new: true }
    );
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
