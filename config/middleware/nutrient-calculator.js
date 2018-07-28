var db = require('../../models');

exports.calculator = function () {
    db.Recipe.findAll({
        include: [db.RecipeAmount]
    }).then(function(data){ 
    console.log('============');
    console.log(data);
    console.log('============');
  });
  };
