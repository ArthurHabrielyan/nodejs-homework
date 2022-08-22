const jwt = require("jsonwebtoken");
const { User } = require("../models");

const { SECRET_KEY } = process.env;

const checkAuth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    return res.status(401).json({
      message: "Not authorized",
    });
  }

  if (token) {
    try {
      const { id } = jwt.verify(token, SECRET_KEY);
      const user = await User.findById(id);

      if (!user || !user.token) {
        return res.status(401).json({
          message: "Not authorized",
        });
      }
      req.user = user;
      next();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = checkAuth;
