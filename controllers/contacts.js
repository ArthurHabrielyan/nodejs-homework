const contactService = require("../services/contacts");

const listContacts = async (req, res, next) => {
  const contacts = await contactService.getAll();
  res.json({ status: "success", code: 200, payload: { contacts } });
};

const getContactById = async (req, res, next) => {
  const contact = await contactService.getById(req.params);

  res.json({ status: "success", code: 200, payload: { contact } });
};

const removeContact = async (req, res, next) => {
  const removeContact = await contactService.deleteContact(req.params);
  res.json({
    message: "contact deleted",
    code: 200,
    payload: { removeContact },
  });
};

const addContact = async (req, res, next) => {
  const addContact = await contactService.addContact(req.body);
  res.json({ status: "success", code: 200, payload: { addContact } });
};

const updateContact = async (req, res, next) => {
  const updateContact = await contactService.updateContact(
    req.params,
    req.body
  );
  res.json({ status: "success", code: 200, payload: { updateContact } });
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
