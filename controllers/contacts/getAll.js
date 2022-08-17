const {contacts: services} = require('../../services');

const getAll = async (req, res, next) => {
  const {_id: id} = req.user;
  const {page, limit, favorite} = req.query;
  const skip = (page - 1) * limit;
  const result = await services.getAll({id, skip, limit, favorite});

  res.json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getAll;
