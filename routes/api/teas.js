const router = require("express").Router();
const teaData = require("../../controllers/teaData");

// Matches with "/api/books"
router.route("/")
  .get(teaData.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(teaData.findById)


module.exports = router;
