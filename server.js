const express = require("express");
const bodyParser = require("body-parser");
// const sequelize = require("./config/connection.js");
const path = require("path");
const PORT = process.env.PORT || 3800;
var flash = require('connect-flash');
const db = require("./models");
// const routes = require('./routes')(app);
const session = require('express-session'); 
const passport = require("./config/passport");
const config = require("./config/extra-config");
const app = express();
// Serve static content for the app from the "public" directory in the application directory.

//app.use(favicon(__dirname + '/public/favicon.png'));
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const isAuth 				 = require("./config/middleware/isAuthenticated");
const authCheck 		 = require('./config/middleware/attachAuthenticationStatus');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
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

//app.set('views', path.join(__dirname, '/../views'));    
// Import routes and give the server access to them.

// passport.serializeUser(function(user, done) {
// 	console.log(user);
// 	done(null, user._id);
// });

// passport.deserializeUser(function(id, done) {
// 	user.findById(id, function(err, user) {
// 		done(err, user);
// 	});
// });


// app.use(passport.initialize());
// app.use(passport.session());
//require("./routes/api-routes.js")(app);

//db.sequelize.sync({force: true}).then(function() {
  db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
     console.log("App now listening at localhost:" + PORT);
  });
});