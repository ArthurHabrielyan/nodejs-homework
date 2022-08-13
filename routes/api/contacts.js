const express = require("express");
const contactsController = require("../../controllers/contacts");
const router = express.Router();

router.get("/", contactsController.listContacts);

router.get("/:id", contactsController.getContactById);

router.post("/", contactsController.addContact);

router.delete("/:id", contactsController.removeContact);

router.put("/:id", contactsController.updateContact);

router.patch("/:id/favorite", contactsController.updateFavorite);

module.exports = router;
