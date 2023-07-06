//controller
const { adminRegister, adminlogin, deleteAdmin } = require("../controller/admin");
const { creatingGuard, getAllGuard, deleteGuard, freeGuard } = require("../controller/guard");
const { addlocation, getlocation, deletelocation } = require("../controller/location");

//route
const router = require("express").Router()

//middlewares
const verifySuperAdmin = require("../middleware/verifySuperAdmin");
const verifyAdmin = require("../middleware/verifyAdmin")

//admin
router.post("/register", adminRegister);
router.post("/login", adminlogin);
router.delete("/deleteAdmin/:id", verifySuperAdmin, deleteAdmin);


//guard
router.post("/createGuard", verifyAdmin, creatingGuard);
router.delete("/deleteGuard/:id", verifySuperAdmin, deleteGuard);
router.get("/getAllGuard", getAllGuard);
router.get("/freeGuard", freeGuard)

//location
router.post("/createlocation", verifyAdmin, addlocation)
router.delete("/deletelocation/:id", verifySuperAdmin, deletelocation);
router.get("/getlocation", getlocation)


module.exports = router;