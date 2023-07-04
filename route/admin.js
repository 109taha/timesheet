const { adminRegister } = require("../controller/admin");
const router = require("express").Router();

router.post("/register", adminRegister);

module.exports = router;