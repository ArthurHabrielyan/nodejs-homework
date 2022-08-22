const gravatar = require('gravatar');

const {User} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const signup = tryCatchWrapper(async ({username, email, password}) => {
  const user = await User.findOne({email});

  if (user) {
    return null;
  }

  const avatarURL = gravatar.url(email);
  const newUser = new User({username, email, avatarURL});
  newUser.setPassword(password);

  const savedUser = await newUser.save();

  return savedUser;
});

module.exports = signup;
