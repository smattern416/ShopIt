const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const productsRoutes = require("./products")

//User Routes
router.use("/users", userRoutes);
router.use("/products", productsRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
