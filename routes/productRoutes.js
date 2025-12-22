const express = require(`express`);
const router = express.Router();
const { authenticateUser, authorizePermissions } = require(
  `../middleware/authentication`,
);
const {
  criaProduto,
  pegaUnicoProduto,
  pegaTodosProduto,
  deletaProduto,
  atualizaProduto,
  updateProduto,
} = require("../Controllers/productController");

router
  .route(`/`)
  .post([authenticateUser, authorizePermissions(`admin`)], criaProduto)
  .get(pegaTodosProduto);

router
  .route(`/uploadImage`)
  .post([authenticateUser, authorizePermissions(`admin`)], atualizaProduto);

router
  .route(`/:id`)
  .get(pegaUnicoProduto)
  .patch([authenticateUser, authorizePermissions(`admin`)], updateProduto)
  .delete([authenticateUser, authorizePermissions(`admin`)], deletaProduto);

module.exports = router;
