var path = require('path');

module.exports = function(app){
    const ingredients_routes = require('./routes/Ingredients_routes');
    const users = require('./routes/users');
    const recipes_routes = require('./routes/Recipes_routes');

    app.use('/api/recipes', recipes_routes);
    app.use('/users',users);
    app.use('/api/ingredients', ingredients_routes);
}