const CustomError = require("../errors");
const { isTokenValid, createJWT } = require("../utils");
const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError("Autenticação inválida");
  }

  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Autenticação inválida");
  }
};

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError.Unauthorized("Não autorizado a acessar essa nota");
    }
    next();
  };
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
