const { adminRegister, adminlogin } = require("../controller/admin");
const { creatingGuard, getAllGuard } = require("../controller/guard");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

//admin
router.post("/register", adminRegister);
router.post("/login", adminlogin);

//guard
router.post("/createGuard", authMiddleware, creatingGuard);
router.get("/getAllGuard", authMiddleware, getAllGuard);




module.exports = router;