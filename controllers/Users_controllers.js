var db = require('../models');


//this is for employees to update their profile: username can be fullname, update email, phone number or password; editable data displayed in input
exports.userProfileUpdate = function(req, res) {
    // console.log(req.body);
    
    db.User.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(function(dbUser){
          // console.log(dbUser);
        //   res.render("editprofile",{
        //     layout: 'main',
        //     users: dbUser
        // });
 
        });
};
exports.findUser = function (req, res) {
    //console.log(req.user.username);
    if (req.user) {
      var userId=req.user.id;
    } else {
      var userId = 6;
    }
    db.User.findAll(
        {
          where: {
            id: userId
          }
        }).then(function(dbUser){
          // console.log(dbUser);
          // res.render("editprofile",{
          //   layout: 'main',
          //    firstname: dbUser[0].firstname,
          //    lastname: dbUser[0].lastname,
          //    username: dbUser[0].username,
          //    password: dbUser[0].password,
          //    email: dbUser[0].email,
          //    id: dbUser[0].id
          //  });
        });
};
//for admin to add new user
exports.adminAdduser = function(req, res) {
     
    db.User.findAll({
        where: {username: req.body.username}
      }).then(function(users) {
        // console.log(users);
        if (users.length > 0) {
          res.json({
            duplicateUser: true
          });
        //At some point, make sure that only one user can be associated with an email.
        } else {
          console.log("this is a new user");
          db.User.create(req.body          
          ).then(function(newuser) {
            console.log("New User created: " + newuser);
            console.log("id: "+newuser.insertId);
            //res.send({redirect: '/users/admin'});
          }).catch(function(err) {
            res.json(err);
          });
        }
      })
};
//need to create admin page which owner is able to add and delete user, show users in a table with button of edit and delete in the last column
exports.adminUpdateuser = function(req, res) {

    console.log(req.body);
    
    db.User.update(req.body,
        {
          where: {
            id: req.params.id
          }
        }).then(function(dbUser){
        //   res.json(dbUser);
          
 
        });
};
//for admin to delete a user
exports.adminDeleteuser = function(req, res) {
    console.log(req.body);
    db.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        // res.json(dbUser);
      });
};

exports.adminMain = function (req, res) {
  //console.log(req.user.username);
  //console.log(req.user.id);
    if (req.user) {
    var loginUser=req.user.username;
    } else {
    var loginUser ="";
    };

    db.User.findAll({
        //where: query
      }).then(function(dbUser) {
        res.json(dbUser);
      });
};

exports.signOutUser = function(req, res) {
    req.logout();
    res.redirect("/");
};
  
  // login
exports.loginUser = function(req, res) {
  console.log(req.body);
    //  console.log(req.user.username);
    //  console.log(req.user);
      // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
      // So we're sending the user back the route to the members page because the redirect will happen on the front end
      // They won't get this or even be able to access this page if they aren't authed
    res.json("/");
};
  
  