const {auth: services} = require('../../services');

const updateSub = async (req, res, next) => {
  const {_id: id} = req.user;
  const {subscription} = req.body;

  const result = await services.patch({id, subscription});

  res.status(200).json({
    data: result,
  });
};

module.exports = updateSub;
