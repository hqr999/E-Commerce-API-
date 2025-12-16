const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const pegaTodosUsuarios = async (req, res) => {
  console.log(req.user);
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json({ users });
};

const pegaUnicoUsuario = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select("-password");
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ user });
};

const mostraUsuarioAtual = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

const atualizaUsuario = async (req, res) => {
  res.send(req.body);
};

const atualizaSenha = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError("Por favor dê os dois valores");
  }
  const user = await User.findOne({ _id: req.user.userId });

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Credenciais inválidas");
  }
  user.password = newPassword;
  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Sucesso! Senha mudada" });
};

module.exports = {
  pegaTodosUsuarios,
  pegaUnicoUsuario,
  mostraUsuarioAtual,
  atualizaUsuario,
  atualizaSenha,
};
