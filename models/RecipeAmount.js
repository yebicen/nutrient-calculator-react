module.exports = function (sequelize, DataTypes) {
    const RecipeAmount = sequelize.define("RecipeAmount", {
        Amount: {
            type: DataTypes.DECIMAL(10,2),
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
        }
    });
    RecipeAmount.associate = function (models) {
        RecipeAmount.belongsTo(models.Ingredient);
        RecipeAmount.belongsTo(models.Recipe);
    };

    return RecipeAmount;
};

