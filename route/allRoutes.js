const { adminRegister, adminlogin, deleteAdmin } = require("../controller/admin");
const { creatingGuard, getAllGuard, deleteGuard } = require("../controller/guard");
const { addlocation, getlocation, deletelocation } = require("../controller/location");
const { adminMiddleware, SuperAdminMiddleware, verifytoken } = require("../middleware/authMiddleware");
const {adminAuth, superAdminAuth} = require("../middleware/midlleware.js")
const router = require("express").Router();

//admin
router.post("/register", adminRegister);
router.post("/login", adminlogin);
router.delete("/deleteAdmin/:id", superAdminAuth, deleteAdmin);


//guard
router.post("/createGuard", adminAuth, creatingGuard);
router.get("/getAllGuard", adminAuth, getAllGuard);
router.delete("/deleteGuard/:id", superAdminAuth, deleteGuard);

//location
router.post("/createlocation", adminMiddleware, addlocation)
router.get("/getlocation", adminMiddleware, getlocation)
router.delete("/deletelocation/:id", adminMiddleware, deletelocation);


module.exports = router;