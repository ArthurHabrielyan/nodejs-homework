const {User} = require('../../models');

const {tryCatchWrapper} = require('../../middlewares');

const logout = tryCatchWrapper(async ({id}) => {
  const user = await User.findOne({id});

  if (!user) {
    return null;
  }
  await User.findByIdAndUpdate(id, {token: null});

  return user;
});

module.exports = logout;
