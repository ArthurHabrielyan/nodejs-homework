const {User} = require('../../models');

const {tryCatchWrapper} = require('../../middlewares');

const patch = tryCatchWrapper(async ({id, subscription}) => {
  const result = await User.findByIdAndUpdate(id, {subscription}, {new: true});

  return result;
});

module.exports = patch;
