const {Contact} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getContactById = tryCatchWrapper(async ({id}) => {
  const data = await Contact.findById(id);

  if (!data) {
    return null;
  }

  return data;
});

module.exports = getContactById;
