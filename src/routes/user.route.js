const {register} = require("../controllers/auth.controller");
const {find, getPages} = require("../controllers/user.controller");
const isAdmin = require("../middlewares/is-admin.middleware");
const isAuth = require("../middlewares/is-auth.controller");

const router = require("express").Router();

router.get("/users", isAuth, isAdmin, find);
router.get("/users/page", getPages);
module.exports = router;
