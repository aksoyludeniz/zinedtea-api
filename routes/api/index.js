const router = require("express").Router();

const teaRoutes = require("./teas");

// Book routes
router.use("/teas", teaRoutes);

module.exports = router;
