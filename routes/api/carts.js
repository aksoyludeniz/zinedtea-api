const router = require("express").Router();
const cart = require("../../controllers/cart");


router
  .route("/")
  .get(cart.findAll)
  .post(cart.create)
  .put(cart.update)

router
  .route("/:id")
  .get(cart.findById)
  .delete(cart.delete)

module.exports = router;
