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
        //Smoothie, or Acai Bowl, etc.
       RecipeType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50],
            }
        },
        RecipeImage: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Recipe.associate = function(models) {
        // associations can be defined here
        Recipe.hasMany(models.RecipeAmount,{onDelete: 'CASCADE'});
    }

    return Recipe;
};
