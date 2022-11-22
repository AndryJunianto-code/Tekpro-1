const mongoose = require("mongoose");

const BookmarkListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
      default: [],
    },
    postsId: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookmarkList", BookmarkListSchema);
