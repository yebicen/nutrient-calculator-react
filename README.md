![Alt Text](nu_3.gif)

![Alt Text](nu_2.gif)

![Alt Text](nu_4.gif)

# Nutrient Calculator
Purpose of this application is to allow the users to calculate nutritional values in juices and smoothies.
Target users are primarily juicing bars and its employees, making this initially an internal tool.

Users can add to a list of ingredients along with per-unit nutritional values for each ingredient (Calories, Carbs, Sugars, Fat and Protein ). These ingredients can then be selected and added into recipes with various amounts as necessary. 

Application will then calculate total nutritional values of each recipe.

## Technologies Used
1. MVC Framework
2. Node.js
3. Reactjs
4. MySQL DB & Sequelize ORM
5. Bluebird.js for executing some of the promises
6. Passport.js with Bcrypt (for authentication)
7. Heroku & JawsDB (for deployment)

## Routes
1. `/ingredients` - allows user to create, read, update and destroy ingredients. https://nameless-temple-93876.herokuapp.com/ingredients
2. `/recipes` - allows user to create, read and destroy recipes using existing ingredients and adding values for drinks of small/medium/large sizes. Multiple ingredients can be added. Ingredient list is populated by a GET request to the ingredient table in the database. https://nameless-temple-93876.herokuapp.com/recipes
3. `/admin` - allows an administrator to create/read/update/delete users https://nameless-temple-93876.herokuapp.com/admin . **User type must be specified as `admin` or `employee`**. Password is encrypted with Bcrypt
4. `/login` - https://nameless-temple-93876.herokuapp.com/login Users can log in with their username/password. Intended users are employees of the shop.
5. `/profile` - after logging in, users can go here to edit their profile information. https://nameless-temple-93876.herokuapp.com/profile

## Why this project?
This application can be of great help to small business owners operating juice bars. Considering that juice bar customers tend to be health-focused, it would be beneficial for any such business to be able to easily calculate and provide nutritional information to them.

## Future Improvements
1. Finish nutrient calculation route and function to display total nutritional values for each recipe
2. **Improvement:** integrate USDA Food Composition Databases API to easily add ingredients with pre-filled nutritional values
3. **Improvement:** create customer login to allow customers to save favorites, customize recipes, etc.
4. **Improvement:** add online ordering feature
5. **Improvement:** UI/UX overhaul

## Get started
To get started with this project, do one of the following:

1. Using git from command line, `git clone git@github.com:geochanto/nutrient-calculator-react.git` 

2. Download the zip archive: https://github.com/geochanto/nutrient-calculator-react/archive/master.zip

3. Create a fork at https://github.com/geochanto/nutrient-calculator-react

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
