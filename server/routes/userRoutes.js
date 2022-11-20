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

router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
