//controller
const { adminRegister, adminlogin, deleteAdmin } = require("../controller/admin");
const { creatingGuard, getAllGuard, deleteGuard, freeGuard } = require("../controller/guard");
const { addlocation, getlocation, deletelocation } = require("../controller/location");
const { register, login, deleted } = require("../controller/user");

//route
const router = require("express").Router()

//middlewares
const verifySuperAdmin = require("../middleware/verifySuperAdmin");
const verifyAdmin = require("../middleware/verifyAdmin");

//user
router.post("/register", register);
router.post("/login", login);
router.delete("/delete/:id", verifySuperAdmin, deleted);

//admin
router.post("/registerAdmin", adminRegister);
router.post("/loginAdmin", adminlogin);
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