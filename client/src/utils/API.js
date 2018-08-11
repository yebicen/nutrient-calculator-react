import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
    getIngredients: function() {
        return axios.get('/api/ingredients');
    },
    getOneIngredient: function(editIngredientId) {
        return axios.get(`/api/ingredients/${editIngredientId}`);
    },
    addIngredient: function(newIngredient) {
        return axios.post('/api/ingredients/new', newIngredient);
    },
    deleteIngredient: function(deleteIngredientId) {
        return axios.delete(`/api/ingredients/delete/${deleteIngredientId}`);
    },
    editIngredient: function(editIngredientId, editState) {
        return axios.put(`/api/ingredients/edit/${editIngredientId}`, editState);
    },
    addRecipe: function(newRecipe) {
        return axios.post('/api/recipes/new', newRecipe);
    },
    getRecipes: function() {
        return axios.get('/api/recipes');
    }
};
