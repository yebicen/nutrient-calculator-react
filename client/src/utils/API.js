import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
    getIngredients: function() {
        return axios.get('/ingredients');
    },
    addIngredient: function(newIngredient) {
        return axios.post('/ingredients/new', newIngredient);
    }
};
