var db = require('../models');
var sequelize = require('sequelize');
var Promise = require("bluebird");

//allows to check if array already contains value
//JSON.stringify converts objects to strings to allow for accurate comparison
Array.prototype.contains = function (value) {
  for (var i = 0; i < this.length; i++) {
    if (JSON.stringify(this[i]) === JSON.stringify(value))
      return true;
  }
  return false;
}

exports.index = function (req, res) {
  // var loggedIn = false;
  // var userText = "";
  // if (req.user) {
  //   loggedIn = true;
  //   userText = "Logged In as " + req.user.username;
  // };

  db.Recipe.findAll({

  }).then(function (data) {
    res.json(data);
  });
};

exports.viewRecipes = function (req, res) {
  db.RecipeAmount.findAll({
    include: [
      {
        model: db.Recipe,
        as: 'Recipe'
      },
      {
        model: db.Ingredient,
        as: 'Ingredient'
      }
    ]
  }).then(function (data) {
    let recipes = {};
    let smallIngredients = {};
    let mediumIngredients = {};
    let largeIngredients = {};
    let ingredientTotalsSmall = {};
    let ingredientTotalsMedium = {};
    let ingredientTotalsLarge = {};
    const newData = [];

    for (let i = 0; i < data.length; i++) {
      // console.log('DATA  :' + JSON.stringify(data[i],null,2))
      const recipeId = data[i].dataValues.RecipeId;
      if (!recipes[recipeId]) {
        recipes[recipeId] = [];
      }

      //Use Array.prototype.contains to push only unique recipe info into the recipe recipeId object
      if (!recipes[recipeId].contains(data[i].Recipe)) {
        recipes[recipeId].push(data[i].Recipe);
      }

      //create empty arrays if they don't exist
      if (!smallIngredients[recipeId]) {
        smallIngredients[recipeId] = [];
      }
      if (!mediumIngredients[recipeId]) {
        mediumIngredients[recipeId] = [];
      }
      if (!largeIngredients[recipeId]) {
        largeIngredients[recipeId] = [];
      }

      if (!ingredientTotalsSmall[recipeId]) {
        ingredientTotalsSmall[recipeId] = [];
      }
      if (!ingredientTotalsMedium[recipeId]) {
        ingredientTotalsMedium[recipeId] = [];
      }
      if (!ingredientTotalsLarge[recipeId]) {
        ingredientTotalsLarge[recipeId] = [];
      }

      //set ingredient & amount data for small size
      if (data[i].Size === "sm") {
        let ingredient = {
          ingredientInfo: data[i].Ingredient,
          ingredientAmount: data[i].Amount
        }
        smallIngredients[recipeId].push(ingredient)

        let ingredientTotal = {
          id: data[i].Ingredient.id,
          Calories: parseFloat(data[i].Ingredient.Calories) *  parseFloat(data[i].Amount),
          Carbs:  parseFloat(data[i].Ingredient.Carbs) *  parseFloat(data[i].Amount),
          Sugar:  parseFloat(data[i].Ingredient.Sugar) *  parseFloat(data[i].Amount),
          Fat:  parseFloat(data[i].Ingredient.Fat) *  parseFloat(data[i].Amount),
          Protein: parseFloat(data[i].Ingredient.Protein) *  parseFloat(data[i].Amount)
        }
        ingredientTotalsSmall[recipeId].push(ingredientTotal)
      }

      else if (data[i].Size === "md") {
        let ingredient = {
          ingredientInfo: data[i].Ingredient,
          ingredientAmount: data[i].Amount
        }
        mediumIngredients[recipeId].push(ingredient)

        let ingredientTotal = {
          id: data[i].Ingredient.id,
          Calories: data[i].Ingredient.Calories * data[i].Amount,
          Carbs: data[i].Ingredient.Carbs * data[i].Amount,
          Sugar: data[i].Ingredient.Sugar * data[i].Amount,
          Fat: data[i].Ingredient.Fat * data[i].Amount,
          Protein: data[i].Ingredient.Protein * data[i].Amount
        }
        ingredientTotalsMedium[recipeId].push(ingredientTotal)
      }

      else if (data[i].Size === "lg") {
        let ingredient = {
          ingredientInfo: data[i].Ingredient,
          ingredientAmount: data[i].Amount
        }
        largeIngredients[recipeId].push(ingredient)

        let ingredientTotal = {
          id: data[i].Ingredient.id,
          Calories: data[i].Ingredient.Calories * data[i].Amount,
          Carbs: data[i].Ingredient.Carbs * data[i].Amount,
          Sugar: data[i].Ingredient.Sugar * data[i].Amount,
          Fat: data[i].Ingredient.Fat * data[i].Amount,
          Protein: data[i].Ingredient.Protein * data[i].Amount
        }
        ingredientTotalsLarge[recipeId].push(ingredientTotal)
      }
    }


    for (let recipeId in recipes) {
      var totalCaloriesSmall = 0;
      var totalCarbsSmall = 0;
      var totalSugarSmall = 0;
      var totalFatSmall = 0;
      var totalProteinSmall = 0;
      var totalCaloriesMedium = 0;
      var totalCarbsMedium = 0;
      var totalSugarMedium = 0;
      var totalFatMedium = 0;
      var totalProteinMedium = 0;
      var totalCaloriesLarge = 0;
      var totalCarbsLarge = 0;
      var totalSugarLarge = 0;
      var totalFatLarge = 0;
      var totalProteinLarge = 0;
      for (let i = 0; i < ingredientTotalsSmall[recipeId].length; i++) {
        var Calories = parseFloat(ingredientTotalsSmall[recipeId][i].Calories);
        var Carbs = parseFloat(ingredientTotalsSmall[recipeId][i].Carbs);
        var Sugar = parseFloat(ingredientTotalsSmall[recipeId][i].Sugar);
        var Fat = parseFloat(ingredientTotalsSmall[recipeId][i].Fat);
        var Protein = parseFloat(ingredientTotalsSmall[recipeId][i].Protein);
        totalCaloriesSmall += Calories;
        totalCarbsSmall += Carbs;
        totalSugarSmall += Sugar;
        totalFatSmall += Fat;
        totalProteinSmall += Protein;
      }

      for (let i = 0; i < ingredientTotalsMedium[recipeId].length; i++) {
        var Calories = parseFloat(ingredientTotalsMedium[recipeId][i].Calories);
        var Carbs = parseFloat(ingredientTotalsMedium[recipeId][i].Carbs);
        var Sugar = parseFloat(ingredientTotalsMedium[recipeId][i].Sugar);
        var Fat = parseFloat(ingredientTotalsMedium[recipeId][i].Fat);
        var Protein = parseFloat(ingredientTotalsMedium[recipeId][i].Protein);
        totalCaloriesMedium += Calories;
        totalCarbsMedium += Carbs;
        totalSugarMedium += Sugar;
        totalFatMedium += Fat;
        totalProteinMedium += Protein;
      }

      for (let i = 0; i < ingredientTotalsLarge[recipeId].length; i++) {
        var Calories = parseFloat(ingredientTotalsLarge[recipeId][i].Calories);
        var Carbs = parseFloat(ingredientTotalsLarge[recipeId][i].Carbs);
        var Sugar = parseFloat(ingredientTotalsLarge[recipeId][i].Sugar);
        var Fat = parseFloat(ingredientTotalsLarge[recipeId][i].Fat);
        var Protein = parseFloat(ingredientTotalsLarge[recipeId][i].Protein);
        totalCaloriesLarge += Calories;
        totalCarbsLarge += Carbs;
        totalSugarLarge += Sugar;
        totalFatLarge += Fat;
        totalProteinLarge += Protein;
      }

      newData.push({
        RecipeInfo: recipes[recipeId],
        sizes: {
          small: {
            ingredients: smallIngredients[recipeId],
            nutritionTotals: {
              Calories: totalCaloriesSmall.toFixed(2),
              Carbs: totalCarbsSmall.toFixed(2),
              Sugar: totalSugarSmall.toFixed(2),
              Fat: totalFatSmall.toFixed(2),
              Protein: totalProteinSmall.toFixed(2)
            }
          },
          medium: {
            ingredients: mediumIngredients[recipeId],
            nutritionTotals: {
              Calories: totalCaloriesMedium.toFixed(2),
              Carbs: totalCarbsMedium.toFixed(2),
              Sugar: totalSugarMedium.toFixed(2),
              Fat: totalFatMedium.toFixed(2),
              Protein: totalProteinMedium.toFixed(2)
            }
          },
          large: {
            ingredients: largeIngredients[recipeId],
            nutritionTotals: {
              Calories: totalCaloriesLarge.toFixed(2),
              Carbs: totalCarbsLarge.toFixed(2),
              Sugar: totalSugarLarge.toFixed(2),
              Fat: totalFatLarge.toFixed(2),
              Protein: totalProteinLarge.toFixed(2)
            }
          },

        }
      });
    }
    res.json(newData)
  })
};

exports.getOneRecipe = function (req, res) {
  db.Recipe.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (recipeInfo) {
      db.RecipeAmount.findAll({
        where: {
          RecipeId: recipeInfo.dataValues.id
        },
        include: [
          {
            model: db.Recipe,
            as: 'Recipe'
          }
        ]
      })
        .then(function (dbRecipe) {
          let recipe = {};

          for (let i = 0; i < dbRecipe.length; i++) {
            const ingredientId = dbRecipe[i].dataValues.IngredientId;
            if (!recipe[ingredientId]) {
              recipe[ingredientId] = [];
            }

            //Use Array.prototype.contains to push only unique recipe info into the recipe recipeId object
            if (!recipe[ingredientId].contains(ingredientId)) {
              recipe[ingredientId].push(dbRecipe[i]);
            }
          }
          console.log('====================')
          // console.log(dbRecipe[0])

          const newData = {
            RecipeId: dbRecipe[0].Recipe.dataValues.id,
            RecipeName: dbRecipe[0].Recipe.dataValues.RecipeName,
            RecipeDescription: dbRecipe[0].Recipe.dataValues.RecipeDescription,
            RecipeImage: dbRecipe[0].Recipe.dataValues.RecipeImage,
            RecipeIngredients: []
          };

          for (let ingredientId in recipe) {
            // console.log('====================')
            // console.log(recipe[ingredientId][0])
            // console.log(recipe[ingredientId][0].dataValues.Amount)
            let ingredients = {
              IngredientId: recipe[ingredientId][0].dataValues.IngredientId,
              IngredientName: recipe[ingredientId][0].dataValues.IngredientName,
              AmountForSmall: recipe[ingredientId][0].dataValues.Amount,
              AmountForMedium: recipe[ingredientId][1].dataValues.Amount,
              AmountForLarge: recipe[ingredientId][2].dataValues.Amount,
              // Small: {
              //   Amount: recipe[ingredientId][0].dataValues.Amount,
              //   RecipeAmountId: recipe[ingredientId][0].dataValues.id
              // },
              // Medium: {
              //   Amount: recipe[ingredientId][1].dataValues.Amount,
              //   RecipeAmountId: recipe[ingredientId][1].dataValues.id
              // },
              // Large: {
              //   Amount: recipe[ingredientId][2].dataValues.Amount,
              //   RecipeAmountId: recipe[ingredientId][2].dataValues.id
              // }

            }
            // newData.recipeIngredients.push(recipe[ingredientId])
            newData.RecipeIngredients.push(ingredients)

          }

          console.log(newData)

          res.json(newData)
        })

    });
};

//query recipes by id
//join recipeamounts by recipeId & size
//add up calories, carbs, sugars, fat, protein

exports.addRecipe = function (req, res) {
  console.log(req.file)
  console.log('=====================')
  console.log(req.body)
  const imgPath = req.file.path.replace('client/public', '');

  db.Recipe.create({
    RecipeName: req.body.RecipeName,
    RecipeDescription: req.body.RecipeDescription,
    RecipeImage: imgPath
  }).then(function (newRecipe) {
    RecipeIngredients = JSON.parse(req.body.RecipeIngredients)
    var promises = [];
    for (var i = 0; i < RecipeIngredients.length; i++) {
      var RecipeId = newRecipe.dataValues.id;
      promises.push(
        db.RecipeAmount.create({
          Amount: RecipeIngredients[i].AmountForSmall,
          Size: 'sm',
          Type: 'smoothie',
          IngredientId: RecipeIngredients[i].IngredientId,
          IngredientName: RecipeIngredients[i].IngredientName,
          RecipeId: RecipeId
        })
      );

      promises.push(
        db.RecipeAmount.create({
          Amount: RecipeIngredients[i].AmountForMedium,
          Size: 'md',
          Type: 'smoothie',
          IngredientId: RecipeIngredients[i].IngredientId,
          IngredientName: RecipeIngredients[i].IngredientName,
          RecipeId: RecipeId
        })
      );

      promises.push(
        db.RecipeAmount.create({
          Amount: RecipeIngredients[i].AmountForLarge,
          Size: 'lg',
          Type: 'smoothie',
          IngredientId: RecipeIngredients[i].IngredientId,
          IngredientName: RecipeIngredients[i].IngredientName,
          RecipeId: RecipeId
        })
      );
    }

    sequelize.Promise.all(promises).then(function () {
      res.send()
    });

  });

};


exports.deleteRecipe = function (req, res) {
  db.Recipe.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
    res.send();
  })
};


exports.editRecipe = function (req, res) {
  // console.log('EDITING RECIPE')
  // console.log('==============')
  // console.log(req.file)
  // console.log('==============')
  // console.log(req.body)

  let imgPath;
  if (req.file === undefined) {
    imgPath = req.body.RecipeImage
  }
  else {
    imgPath = req.file.path.replace('client/public', '');
  }

  // console.log('==============')
  // console.log('imgPath: ' + imgPath)

  db.Recipe.update(
    {
      RecipeName: req.body.RecipeName,
      RecipeDescription: req.body.RecipeDescription,
      RecipeImage: imgPath
    },
    // req.body,
    {
      where: {
        id: req.body.RecipeId
      }
    })
    .then(function () {
      console.log('DELETE !!!')
      console.log('==============')
      db.RecipeAmount.destroy({
        where: {
          RecipeId: req.body.RecipeId
        }
      })
    })
    .then(function () {
      console.log('NOW ADD !!!')
      console.log('==============')
      console.log(req.body)
      console.log('==============')
      const RecipeIngredients = JSON.parse(req.body.RecipeIngredients);
      const RecipeAmounts = [];
      for (let i = 0; i < RecipeIngredients.length; i++) {
        const RecipeAmountsSmall = {
          Amount: RecipeIngredients[i].AmountForSmall,
          Size: 'sm',
          IngredientName: RecipeIngredients[i].IngredientName,
          Type: "smoothie",
          IngredientId: RecipeIngredients[i].IngredientId,
          RecipeId: req.body.RecipeId
        }
        const RecipeAmountsMedium = {
          Amount: RecipeIngredients[i].AmountForMedium,
          Size: 'md',
          IngredientName: RecipeIngredients[i].IngredientName,
          Type: "smoothie",
          IngredientId: RecipeIngredients[i].IngredientId,
          RecipeId: req.body.RecipeId
        }
        const RecipeAmountsLarge = {
          Amount: RecipeIngredients[i].AmountForLarge,
          Size: 'lg',
          IngredientName: RecipeIngredients[i].IngredientName,
          Type: "smoothie",
          IngredientId: RecipeIngredients[i].IngredientId,
          RecipeId: req.body.RecipeId
        }
        RecipeAmounts.push(RecipeAmountsSmall, RecipeAmountsMedium, RecipeAmountsLarge)
      }
      console.log(RecipeAmounts)
      for (let i = 0; i < RecipeAmounts.length; i++) {
        let RecipeAmount=RecipeAmounts[i]
        console.log('=========== RecipeAmount')
        console.log(RecipeAmount)
        db.RecipeAmount.create({
          Amount: RecipeAmount.Amount,
          Size: RecipeAmount.Size,
          IngredientName: RecipeAmount.IngredientName,
          Type: RecipeAmount.Type,
          IngredientId: RecipeAmount.IngredientId,
          RecipeId: RecipeAmount.RecipeId
        })
      }
    })
    .then(function () {

      res.send();
    })
}
