const router = require("express").Router();

const teaRoutes = require("./teas");
const userRoutes = require("./users");
const noteRoutes = require("./notes");
// Book routes
router.use("/teas", teaRoutes);
router.use("/user", userRoutes);
router.use("/note",
 noteRoutes);

module.exports = router;
