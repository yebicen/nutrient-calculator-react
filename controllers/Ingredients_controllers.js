var db  = require('../models');

exports.viewIngredients = function(req, res) {
  db.Ingredient.findAll({}).then(function(dbIngredient) {
    res.json(dbIngredient)
  });
};

exports.addIngredient = function(req, res) {
  db.Ingredient.create(req.body).then(function() {
    res.redirect('/ingredients');
  });
};

exports.deleteIngredient = function(req, res) {
  db.Ingredient.destroy({
    where: {
      id: req.params.id
    }
  })
};

exports.editIngredient = function(req, res) {
  console.log('req body: ' + req.body.ingredientName);
  db.Ingredient.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/ingredients');
  });
};