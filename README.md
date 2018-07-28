# Nutrient Calculator
Purpose of this application is to allow the users to calculate nutritional values in juices and smoothies.
Target users are primarily juicing bars and its employees, making this initially an internal tool.

Users can add to a list of ingredients along with per-unit nutritional values for each ingredient (Calories, Carbs, Sugars, Fat and Protein ). These ingredients can then be selected and added into recipes with various amounts as necessary. 

Application will then calculate total nutritional values of each recipe. **Note that this last part is still in development.**

## Technologies Used
1. MVC Framework
2. Node.js with Javascript
3. MySQL DB & Sequelize ORM
4. Bluebird.js for executing some of the promises
5. Passport.js with Bcrypt (for authentication)
6. Heroku & JawsDB (for deployment)

## Routes
1. `/ingredients` - allows user to create, read, update and destroy ingredients. http://hidden-spire-11323.herokuapp.com/ingredients
2. `/recipes` - allows user to create, read and destroy recipes using existing ingredients and adding values for drinks of small/medium/large sizes. Multiple ingredients can be added. Ingredient list is populated by a GET request to the ingredient table in the database. http://hidden-spire-11323.herokuapp.com/recipes
3. `/recipetotals` - in progess: this route will display total nutritional values for each recipe

## Why this project?
This application can be of great help to small business owners operating juice bars. Considering that juice bar customers tend to be health-focused, it would be beneficial for any such business to be able to easily calculate and provide nutritional information to them.

## In Progress Items & Future Improvements
1. Finish nutrient calculation route and function to display total nutritional values for each recipe
2. **Improvement:** integrate USDA Food Composition Databases API to easily add ingredients with pre-filled nutritional values
3. **Improvement:** create customer login to allow customers to save favorites, customize recipes, etc.
4. **Improvement:** add online ordering feature
5. **Improvement:** UI/UX overhaul

## Get started
To get started with this project, do one of the following:

1. Using git from command line, `git clone git@github.com:geochanto/nutrient-calculator.git` 

2. Download the zip archive: https://github.com/geochanto/nutrient-calculator/archive/master.zip

3. Create a fork at https://github.com/geochanto/nutrient-calculator

## Contributors
#### Ally Mao
#### https://github.com/AllyMao85/
---
##### Bicen Ye
##### https://github.com/yebicen/
---
##### George Chanturidze
##### https://github.com/geochanto/
---
##### Levan Dvalidze
##### https://github.com/ldvalidze