const { Contact } = require("../schemas/schemas");

const listContacts = async () => {
  try {
    const data = await Contact.find({});
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  const result = Contact.findById(contactId);
  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async (contactId) => {
  try {
    const result = await Contact.findByIdAndDelete(contactId);

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (contact) => {
  await Contact.create(contact);

  return contact;
};

const updateContact = async (id, body) => {
  const result = await Contact.findByIdAndUpdate(id, body, { new: true });

  if (!result) {
    return null;
  }

  return result;
};

const updateFavorite = async (id, body) => {
  const data = await Contact.findByIdAndUpdate(id, body, { new: true });

  if (!data) {
    return null;
  }

  return data;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
};
