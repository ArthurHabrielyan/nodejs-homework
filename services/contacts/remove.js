const {Contact} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const removeContact = tryCatchWrapper(async ({id}) => {
  const data = await Contact.findByIdAndRemove(id);

  if (!data) {
    return null;
  }

  return data;
});

module.exports = removeContact;
