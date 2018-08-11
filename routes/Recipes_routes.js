
var express = require('express');
var router  = express.Router();

var Recipes_controllers = require('../controllers/Recipes_controllers');
var isAuthenticated = require("../config/middleware/isAuthenticated");
// var calculator = require("../config/middleware/nutrient-calculator");

// router.get('/', Recipes_controllers.index);

// router.get('/', Recipes_controllers.index);

router.get('/api/recipes', Recipes_controllers.viewRecipes);

router.post('/new', Recipes_controllers.addRecipe);

router.put('/update/:id', Recipes_controllers.editRecipe);

router.delete('/delete/:id', Recipes_controllers.deleteRecipe);

module.exports = router;