const express = require("express");
const router = express.Router();

const indexController = require("../controllers/indexController");

router
  .route("/")
  .get(indexController.index_get)
  .post(indexController.index_post)
  .put(indexController.index_put)
  .delete(indexController.index_delete);

module.exports = router;
