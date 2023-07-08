//controller
const { register, login, deleted } = require("../controller/user");
const { adminRegister, adminlogin, deleteAdmin } = require("../controller/admin");
const { addlocation, getlocation, deletelocation } = require("../controller/location");
const { creatingGuard, getAllGuard, deleteGuard, freeGuard } = require("../controller/guard");

//route
const router = require("express").Router();

//middlewares
const verifyAdmin = require("../middleware/verifyAdmin");
const verifySuperAdmin = require("../middleware/verifySuperAdmin");
const validUserSchema = require("../middleware/joiSchemaMiddleware/userSchemaMiddlewares");
const validGuardSchema = require("../middleware/joiSchemaMiddleware/guardSchemaMiddlewares")
const validAdminSchema = require("../middleware/joiSchemaMiddleware/AdminSchemamiddlewares");
const validLocationSchema = require("../middleware/joiSchemaMiddleware/locationSchemaMiddleware");

//---------------routes---------------

//homepage
router.get("/", (req, res) => {
    res.send("<h1> Go to Postman bro,</h1><br> <h3>don't worry for server, i'll watch that !</h3>");
});

//user
router.post("/login", login);
router.post("/register", validUserSchema, register);
router.delete("/delete/:id", verifySuperAdmin, deleted);

//admin
router.post("/loginAdmin", adminlogin);
router.post("/registerAdmin", validAdminSchema, adminRegister);
router.delete("/deleteAdmin/:id", verifySuperAdmin, deleteAdmin);


//guard
router.get("/freeGuard", freeGuard);
router.get("/getAllGuard", getAllGuard);
router.delete("/deleteGuard/:id", verifySuperAdmin, deleteGuard);
router.post("/createGuard", validGuardSchema, verifyAdmin, creatingGuard);

//location
router.get("/getlocation", getlocation);
router.delete("/deletelocation/:id", verifySuperAdmin, deletelocation);
router.post("/createlocation", validLocationSchema, verifyAdmin, addlocation);


module.exports = router;