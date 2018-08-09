var express = require('express');
var router  = express.Router();
const path = require("path");
var passport = require("../config/passport");
var users_controller = require('../controllers/Users_controllers');
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isAdmin = require("../config/middleware/isAdmin");
//var attachAuthenticationStatus = require("../config/middleware/attachAuthenticationStatus")
// function isLogginIn() {
//     req.loggedin = !!req.user;
//     next();
// }
//router.get("/api/users", user_controller.findUser);
// router.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/logintest.html"));
//     //res.render("login-modal");
// });

router.post("/api/users", users_controller.adminAdduser);

router.delete("/api/users/:id",users_controller.adminDeleteuser);

router.put("/api/users/:id",users_controller.adminUpdateuser);

//below are user management html routes, need to add isAdmin middleware
// router.get('/admin', isAdmin, users_controller.adminMain);
router.get('/admin', users_controller.adminMain);

router.get('/sign-out', users_controller.signOutUser);

// router.post('/login', passport.authenticate("local"), users_controller.loginUser);
router.post('/login', passport.authenticate("local"), users_controller.loginUser);
//below are for use to edit their own profile; need to get user id
router.get("/profile",isAuthenticated, users_controller.findUser);
// router.get("/profile", users_controller.findUser);
//router.put('/profile/:id', users_controller.userProfileUpdate);
//isAuthenticated

// router.get('/signup', users_controller.registrationPage);
//router.post('/signup', users_controller.signUpUser);

module.exports = router;