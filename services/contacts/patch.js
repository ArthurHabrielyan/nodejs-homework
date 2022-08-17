const {Contact} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const updateFavorite = tryCatchWrapper(async ({id, favorite}) => {
  const data = await Contact
      .findByIdAndUpdate(id, favorite, {new: true});

  if (!data) {
    return null;
  }

  return data;
});

module.exports = updateFavorite;
