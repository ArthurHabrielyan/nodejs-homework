const {contacts: services} = require('../../services');

const postContact = async (req, res, next) => {
  const {_id: id} = req.user;
  const body = req.body;
  const result = await services.add({id, body});

  res.status(201).json({
    data: result,
  });
};

module.exports = postContact;
