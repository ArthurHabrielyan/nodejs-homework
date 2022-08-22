const fs = require("fs/promises");
const path = require("path");
const jimp = require("jimp");

const { User } = require("../../models");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const uploadAvatar = async (req, res, next) => {
  const { path: tempPath, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;
  const normalizedImg = await jimp.read(tempPath);
  await normalizedImg.resize(250, 250).write(tempPath);
  try {
    const resultUpload = path.join(avatarDir, imageName);
    await fs.rename(tempPath, resultUpload);
    const avatarURL = path.join("public", "avatars", imageName);
    await User.findByIdAndUpdate(id, { avatarURL });
    res.status(200).json({
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tempPath);
    next(error);
  }
};

module.exports = uploadAvatar;
