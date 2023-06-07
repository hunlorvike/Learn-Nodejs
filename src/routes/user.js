const user = require("../controllers/userController");
const router = require("express").Router();

router.get("/", user.getUser);

module.exports = router;
