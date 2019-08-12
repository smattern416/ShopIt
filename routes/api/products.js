const router = require("express").Router();
const productController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
  .get(productController.findAll)
  .post(productController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(productController.findByType)
  .put(productController.update)
  .delete(productController.remove);

  router.route("/itemid/:id").get(productController.findById)

module.exports = router;
