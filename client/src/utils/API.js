import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
    getIngredients: function() {
        return axios.get('/ingredients');
    },
    getOneIngredient: function(editIngredientId) {
        return axios.get(`/ingredients/${editIngredientId}`);
    },
    addIngredient: function(newIngredient) {
        return axios.post('/ingredients/new', newIngredient);
    },
    deleteIngredient: function(deleteIngredientId) {
        return axios.delete(`/ingredients/delete/${deleteIngredientId}`);
    },
    editIngredient: function(editIngredientId, editState) {
        return axios.put(`/ingredients/edit/${editIngredientId}`, editState);
    },
    addRecipe: function(newRecipe) {
        return axios.post('/recipes/new', newRecipe);
    },
    getRecipes: function() {
        return axios.get('/recipes');
    },
    getRecipeTotals: function() {
        return axios.get('/recipetotals');
    }
};
