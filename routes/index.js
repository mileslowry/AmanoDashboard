const router = require("express").Router(),
  accountRoutes = require("./accountRoutes"),
  homeRoutes = require("./homeRoutes"),
  customerRoutes = require("./customerRoutes"),
  dashboardRoutes = require("./dashboardRoutes"),
  adminRoutes = require("./adminRoutes"),
  messageRoutes = require("./messageRoutes"),
  apiRoutes = require("./apiRoutes");
  
router.use("/message", messageRoutes);
router.use("/admin", adminRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/account", accountRoutes);
router.use("/customer", customerRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
