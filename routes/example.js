const express = require("express");
const router = express.Router();

const exampleController = require("../controllers/exampleController");

router
  .route("/")
  .get(exampleController.example_get)
  .post(exampleController.example_post)
  .put(exampleController.example_put)
  .delete(exampleController.example_delete);

module.exports = router;
