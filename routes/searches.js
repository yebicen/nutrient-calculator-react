var express = require('express');
var router  = express.Router();
const path = require("path");
var passport = require("../config/passport");
var users_controller = require('../controllers/Search_controllers');
var isAuthenticated = require("../config/middleware/isAuthenticated");
var isAdmin = require("../config/middleware/isAdmin");

router.get('/combined-search?q={query}', search_controller.searchUser);

module.exports = router;