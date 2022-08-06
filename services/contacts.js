const contacts = require("../models/contacts");
const createError = require("../helpers/createError");
const itemSchema = require("../schemas/schemas");

const getAll = async () => {
  try {
    const result = await contacts.listContacts();
    if (!result) {
      throw createError(404);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (params) => {
  try {
    const { id } = params;
    const result = await contacts.getContactById(id);
    if (!result) {
      throw createError(404);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (body) => {
  try {
    const result = contacts.addContact(body);

    if (!result) {
      throw createError(400);
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const deleteContact = async (params) => {
  try {
    const { id } = params;
    const result = contacts.removeContact(id);
    if (!result) {
      throw createError(404);
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const updateContact = async (params, body) => {
  try {
    const { id } = params;
    const { error } = itemSchema.validate(body);
    if (error) {
      throw createError(400);
    }
    const result = contacts.updateContact(id, body);
    if (!result) {
      throw createError(404);
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll,
  getById,
  addContact,
  deleteContact,
  updateContact,
};
