var db = require('../models');

exports.viewIngredients = function (req, res) {
  db.Ingredient.findAll({}).then(function (dbIngredient) {
    res.json(dbIngredient)
  });
};

exports.getOneIngredient = function (req, res) {
  db.Ingredient.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbIngredient) {
    res.json(dbIngredient)
  });
};

exports.addIngredient = function (req, res) {
  db.Ingredient.create(req.body).then(function () {
    res.send();
  })
};

exports.deleteIngredient = function (req, res) {
  db.Ingredient.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    res.send();
  })
};

exports.editIngredient = function (req, res) {
  console.log('req body: ' + req.body);
  db.Ingredient.update(
    req.body, 
    {
    where: {
      id: req.params.id
    }
  })
  res.send();
};