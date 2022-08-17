const {Contact} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const updateContact = tryCatchWrapper(async ({id, body}) => {
  const data = await Contact.findByIdAndUpdate(id, body, {new: true});

  if (!data) {
    return null;
  }

  return data;
});

module.exports = updateContact;
