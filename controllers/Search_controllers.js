var db = require('../models');


//this is to search a user or group of users
exports.searchUser = function(req, res) {
    const query=req.params.query;
    //index columns need to be searched
    //specify match() twice?
    //lastname, firstname, role

    db.User.findAll(
        {
          where: {
            firstname: query
          }
        }).then(function(dbUser){
          res.json(dbUser);
        });     

}