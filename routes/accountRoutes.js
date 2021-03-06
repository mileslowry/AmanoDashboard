const router = require("express").Router(),
    accountController= require("../controllers/accountController");

router.get("/login", accountController.loginView);
router.post("/login", accountController.getIPLocation, accountController.authenticate);
router.get("/logout", accountController.logout, accountController.redirectView);
router.get("/register", accountController.registerView);
router.post("/create", accountController.registerUser, accountController.redirectView);
router.get("/:id", accountController.viewAccount);
router.get("/:id/edit", accountController.editAccountView);
router.put("/:id/update", accountController.update, accountController.redirectView);
router.delete("/:id/delete", accountController.delete, accountController.redirectView);

module.exports = router;