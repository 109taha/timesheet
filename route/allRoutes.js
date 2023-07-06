const { adminRegister, adminlogin, deleteAdmin } = require("../controller/admin");
const { creatingGuard, getAllGuard, deleteGuard } = require("../controller/guard");
const { addlocation, getlocation, deletelocation } = require("../controller/location");
const { adminMiddleware, SuperAdminMiddleware, verifytoken } = require("../middleware/authMiddleware");
const router = require("express").Router();

//admin
router.post("/register", adminRegister);
router.post("/login", adminlogin);
router.delete("/deleteAdmin/:id", SuperAdminMiddleware, deleteAdmin);


//guard
router.post("/createGuard", adminMiddleware, creatingGuard);
router.get("/getAllGuard", adminMiddleware, getAllGuard);
router.delete("/deleteGuard/:id", adminMiddleware, deleteGuard);

//location
router.post("/createlocation", adminMiddleware, addlocation)
router.get("/getlocation", adminMiddleware, getlocation)
router.delete("/deletelocation/:id", adminMiddleware, deletelocation);


module.exports = router;