const { adminRegister, adminlogin } = require("../controller/admin");
const router = require("express").Router();

router.post("/register", adminRegister);
router.post("/login", adminlogin);


module.exports = router;