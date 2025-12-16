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

const authorizePermissions = (req, res, next) => {
  if(req.user.role !== 'admin'){
    throw new CustomError.Unauthorized('Usuário não autorizado a acessar essa rota')
  }
  next();
};

module.exports = {
  authenticateUser,
  authorizePermissions,
};
