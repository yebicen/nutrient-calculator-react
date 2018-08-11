const express = require('express');
const router  = express.Router();

const ingredients_controller = require('../controllers/Ingredients_controllers');
//var isAuthenticated = require("../config/middleware/isAuthenticated");


//add isAuthenticated once authentication works https://github.com/OSP123/TravelSecure/blob/master/routes/trips.js
router.get('/', ingredients_controller.viewIngredients);

router.get('/:id', ingredients_controller.getOneIngredient)

router.post('/new', ingredients_controller.addIngredient);

router.delete('/delete/:id', ingredients_controller.deleteIngredient);

router.put('/edit/:id', ingredients_controller.editIngredient);

module.exports = router;