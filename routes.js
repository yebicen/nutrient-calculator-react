module.exports = function(app){
    const ingredients_routes = require('./routes/Ingredients_routes');
    const users = require('./routes/users');
    const recipes_routes = require('./routes/Recipes_routes');

    app.use('/users',users);
    app.use('/ingredients', ingredients_routes);
    app.use('/recipes', recipes_routes);
    // app.use('/search', searches);
    console.log('routes.js works');
//other routes..

}