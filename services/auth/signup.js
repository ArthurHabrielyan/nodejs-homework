const {User} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const signup = tryCatchWrapper(async ({username, email, password}) => {
  const user = await User.findOne({email});

  if (user) {
    return null;
  }
  const newUser = new User({username, email});
  newUser.setPassword(password);
  const savedUser = await newUser.save();

  return savedUser;
});

module.exports = signup;
