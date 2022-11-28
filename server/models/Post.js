const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
      required: true,
    },
    authorId: {
      type: String,
      required: true,
    },
    postImage: {
      type: String,
    },
    tags: {
      type: Array,
      default: [],
    },
    numOfView: {
      type: Number,
      default: 0,
    },
    numOfLike: {
      type: Number,
      default: 0,
    },
    userIdBookmarked: {
      type: Array,
      default: [],
    },
    bookmarkListId: {
      type: Array,
      default: [],
    },
    authorFollowed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
