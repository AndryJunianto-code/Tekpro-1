const ImageUpload = require("../models/ImageUpload");

module.exports.UploadImage = async (req, res) => {
  const imageUploaded = new ImageUpload({
    image: req.file.path,
  });

  try {
    const savedImage = await imageUploaded.save();
    return res.status(200).json(savedImage);
  } catch (err) {
    return res.status(400).json({
      message: `image upload fail, checl ${err}`,
      status: "err",
    });
  }
};
