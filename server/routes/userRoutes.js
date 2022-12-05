const router = require("express").Router();
const User = require("../models/User");

//find single user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.find({
      userId: req.params.userId,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find single user by name
router.get("/search/:username", async (req, res) => {
  try {
    const user = await User.find({
      username: { $regex: req.params.username, $options: "i" },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//change biodata
router.put("/update", async (req, res) => {
  try {
    let user = await User.findOneAndUpdate(
      { userId: req.body.userId },
      {
        description: req.body.description,
      },
      { new: true }
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//follow someone
router.put("/follow", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { userId: req.body.userId },
      {
        $push: {
          followings: {
            userId: req.body.authorId,
            username: req.body.authorUsername,
            userPicture: req.body.authorPicture,
          },
          followingsId: req.body.authorId,
        },
      },
      { new: true }
    );

    await User.findOneAndUpdate(
      { userId: req.body.authorId },
      {
        $push: {
          followers: req.body.userId,
        },
      },
      { new: true }
    );

    res.status(200).json("success");
  } catch (err) {
    res.status(500).json("err");
  }
});

//unfollow
router.put("/unfollow", async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { userId: req.body.userId },
      {
        $pull: {
          followings: {
            userId: req.body.authorId,
          },
          followingsId: req.body.authorId,
        },
      },
      { new: true }
    );

    await User.findOneAndUpdate(
      { userId: req.body.authorId },
      {
        $pull: {
          followers: req.body.userId,
        },
      },
      { new: true }
    );

    res.status(200).json("success");
  } catch (err) {
    res.status(500).json("err");
  }
});

module.exports = router;
