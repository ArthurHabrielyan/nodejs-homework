const {auth: services} = require('../../services');

const signup = async (req, res, next) => {
  const {username, email, password} = req.body;

  const result = await services.signup({username, email, password});

  if (!result) {
    res.status(209).json({
      message: 'Email in use',
    });
  }

  res.status(201).json({
    user: {
      email,
      subscription: result.subscription,
      avatarUrl: result.avatarURL,
    },
  });
};

module.exports = signup;
