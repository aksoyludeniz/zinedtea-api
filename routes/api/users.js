const router = require("express").Router();
const user = require("../../controllers/user");


router
  .route("/")
  .get(user.findAll)
  .post(user.create)

router
  .route("/:id")
  .get(user.findById)
  .delete(user.delete)

module.exports = router;
