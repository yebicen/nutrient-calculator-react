module.exports = function(sequelize, DataTypes) {
    
    const Recipe = sequelize.define("Recipe", {
        RecipeName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        RecipeDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        RecipeImage: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Recipe.associate = function(models) {
        // associations can be defined here
        Recipe.hasMany(models.RecipeAmount);
    }

    return Recipe;
};
