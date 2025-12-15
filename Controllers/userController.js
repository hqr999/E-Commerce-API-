const pegaTodosUsuarios = async (req, res) => {
  res.send("Rota pega todos usuários");
};

const pegaUnicoUsuario = async (req, res) => {
  res.send("Pega um único usuário");
};

const mostraUsuarioAtual = async (req, res) => {
  res.send("Mostrar usuário atual");
};

const atualizaUsuario = async (req, res) => {
  res.send("Atualiza usuário");
};

const atualizaSenha = async (req, res) => {
  res.send("Atualiza senha atual");
};

module.exports = {
  pegaTodosUsuarios,
  pegaUnicoUsuario,
  mostraUsuarioAtual,
  atualizaUsuario,
  atualizaSenha,
};
