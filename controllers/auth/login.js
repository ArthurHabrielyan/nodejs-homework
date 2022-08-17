const {auth: services} = require('../../services');

const login = async (req, res, next) => {
  const {email, password} = req.body;
  const {user, token} = await services.login({email, password});

  if (!user) {
    return res.status(401).json({
      message: 'Email or password is wrong',
    });
  }

  res.status(200).json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
