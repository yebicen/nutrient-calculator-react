module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        IngredientName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        hasGluten: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isNut: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        isGMO: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Calories: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        Carbs: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        Sugar: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        Fat: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        Protein: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
    });

    Ingredient.associate = function(models) {
        // associations can be defined here
        Ingredient.hasMany(models.RecipeAmount);
    }

    return Ingredient;
};
