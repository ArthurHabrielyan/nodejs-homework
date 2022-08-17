const {contacts: services} = require('../../services');

const deleteContact = async (req, res, next) => {
  const {contactId: id} = req.params;

  const result = await services.remove({id});

  if (!result) {
    return res.status(404).json({
      message: `Not found contact with id: '${contactId}'`,
    });
  }

  res.status(200).json({
    message: 'Contact deleted',
  });
};

module.exports = deleteContact;
