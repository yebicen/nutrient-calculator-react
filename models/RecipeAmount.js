module.exports = function (sequelize, DataTypes) {
    const RecipeAmount = sequelize.define("RecipeAmount", {
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Size: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 2],
                isIn: [['sm', 'md', 'lg']]
            }
        },
        IngredientName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //Smoothie, or Acai Bowl, etc.
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50],
                //isIn: [[ 'Classic Smoothies', 'Light Smoothies', 'Meal Replacements', 'Teas and Coffee', 'Shots']]
            }
        }
    });
    RecipeAmount.associate = function (models) {
        RecipeAmount.belongsTo(models.Ingredient);
        RecipeAmount.belongsTo(models.Recipe);
    };

    return RecipeAmount;
};

