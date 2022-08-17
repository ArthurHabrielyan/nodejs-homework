const {Contact} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const addContact = tryCatchWrapper(async ({id, body}) => {
  const data = await Contact.create({...body, owner: id});

  return data;
});

module.exports = addContact;
