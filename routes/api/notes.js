const router = require("express").Router();
const note = require("../../controllers/note");


router
  .route("/")
  .get(note.findAll)
  .post(note.create)

router
  .route("/:id")
  .get(note.findById)
  .delete(note.delete)

module.exports = router;
