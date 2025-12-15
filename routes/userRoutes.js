const express = require("express");
const router = express.Router();

const {
  pegaTodosUsuarios,
  pegaUnicoUsuario,
  mostraUsuarioAtual,
  atualizaUsuario,
  atualizaSenha,
} = require("../Controllers/userController");

router.route("/").get(pegaTodosUsuarios);

router.route("/showMe").get(mostraUsuarioAtual);
router.route("/updateUser").patch(atualizaUsuario);
router.route("/updateUserPassword").post(atualizaSenha);

router.route("/:id").get(pegaUnicoUsuario);

module.exports = router;