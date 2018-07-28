var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");



// parse application/json

passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"

    function(username, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          username: username
        }
      }).then(function(dbUser) {
        console.log(dbUser);
        //if (err) { return done(err)};
        // If there's no user with the given username
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        // If there is a user with the given username, but the password the user gives us is incorrect
        //there was 'else' before if
        if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  ));
  
  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    
       cb(null,obj);
 
  });
  
  // Exporting our configured passport
  module.exports = passport;