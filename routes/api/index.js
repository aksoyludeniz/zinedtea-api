const router = require("express").Router();

const teaRoutes = require("./teas");
const userRoutes = require("./users");
const noteRoutes = require("./notes");
const cartRoutes = require("./carts")
// Book routes
router.use("/teas", teaRoutes);
router.use("/user", userRoutes);
router.use("/note", noteRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
