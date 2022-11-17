const mongoose = require("mongoose");

const ImageUploadSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("imageUpload", ImageUploadSchema);
