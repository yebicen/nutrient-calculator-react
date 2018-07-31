const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
var flash = require('connect-flash');
const db = require("./models");
const session = require('express-session'); 
const passport = require("./config/passport");
const config = require("./config/extra-config");
const app = express();

const isAuth 				 = require("./config/middleware/isAuthenticated");
const authCheck 		 = require('./config/middleware/attachAuthenticationStatus');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

app.use(flash());
require('./routes')(app);
const Ingredients_routes = require('./routes/Ingredients_routes');

app.use(Ingredients_routes);

// db.sequelize.sync({force: true}).then(function() {
  db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
     console.log("App now listening at localhost:" + PORT);
  });
});