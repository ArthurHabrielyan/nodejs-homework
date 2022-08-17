const {auth: services} = require('../../services');

const logout = async (req, res, next) => {
  const {_id: id} = req.user;

  const user = await services.logout({id});

  if (!user) {
    return res.status(401).json({
      message: 'Not authorized',
    });
  }

  res.status(204).json();
};

module.exports = logout;
