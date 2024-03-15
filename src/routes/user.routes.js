const { Router } = require("express");
const userControllers = require("#C/user.controller");

const router = Router();

router.post("/create", userControllers.create_user);

module.exports = router;
