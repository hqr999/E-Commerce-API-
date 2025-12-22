const criaProduto = async (req, res) => {
  res.send(`Cria Produto`);
};
const pegaTodosProduto = async (req, res) => {
  res.send(`Pega todos produtos`);
};
const pegaUnicoProduto = async (req, res) => {
  res.send(`Pega um unico produto`);
};
const atualizaProduto = async (req, res) => {
  res.send(`Atualiza produto`);
};
const deletaProduto = async (req, res) => {
  res.send(`Deleta produto`);
};
const updateProduto = async (req, res) => {
  res.send(`Upload produto`);
};

module.exports = {
  criaProduto,
  pegaUnicoProduto,
  pegaUnicoProduto,
  atualizaProduto,
  deletaProduto,
  updateProduto,
  pegaTodosProduto,
};
