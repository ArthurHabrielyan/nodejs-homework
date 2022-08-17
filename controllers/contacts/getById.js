const {contacts: services} = require('../../services');

const getById = async (req, res, next) => {
  const {contactId: id} = req.params;

  const result = await services.getById({id});

  if (!result) {
    return res.status(404).json({
      message: `Not found contact with id: '${contactId}'`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getById;
