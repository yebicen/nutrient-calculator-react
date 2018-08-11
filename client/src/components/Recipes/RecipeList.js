import React from 'react';
import { Container, Table, Row, Col } from 'reactstrap';
import API from '../../utils/API';


export default class RecipeContainer extends React.Component {
    state = {
        dbRecipes: []
    }

    getRecipes = () => {
        API.getRecipes()
            .then(res => {
                this.setState({
                    dbRecipes: res.data
                })
                console.log(JSON.stringify(this.state.dbRecipes, null, 2))
            })


    }

    componentDidMount() {
        this.getRecipes();
    };

    render() {
        return (
            <div className="recipesWrapper">
                {this.state.dbRecipes.map(recipe => (
                    <div key={recipe.RecipeInfo[0].id} className="singleRecipeWrapper">
                        <Row className="recipeInfo">
                            <Col lg="3" className="recipeImage">
                                <div>
                                    <div><strong>Image:</strong></div>
                                    <img src={recipe.RecipeInfo[0].RecipeImage} className="img-fluid" />
                                </div>
                            </Col>
                            <Col lg="3" className="recipeName">
                                <div><strong>Recipe Name:</strong></div>
                                {recipe.RecipeInfo[0].RecipeName}
                            </Col>
                            <Col lg="6" className="recipeDescription">
                                <div><strong>Recipe Description:</strong></div>
                                {recipe.RecipeInfo[0].RecipeDescription}
                            </Col>
                        </Row>
                        <Row><h2>Small Size</h2></Row>
                        <Row className="">

                            <Col className="recipeIngredient">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Amount (ounces)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.sizes.small.ingredients.map(ingredient => (
                                            <tr key={ingredient.ingredientInfo.id}>
                                                <td className="ingredientName">{ingredient.ingredientInfo.IngredientName}</td>
                                                <td className="ingredientAmount">{ingredient.ingredientAmount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <td><strong>Total Calories</strong></td>
                                            <td className="totalCalories">{recipe.sizes.small.nutritionTotals.Calories}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Carbs</strong></td>
                                            <td className="totalCarbs">{recipe.sizes.small.nutritionTotals.Carbs}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Sugar</strong></td>
                                            <td className="totalSugar">{recipe.sizes.small.nutritionTotals.Sugar}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Fat</strong></td>
                                            <td className="totalFat">{recipe.sizes.small.nutritionTotals.Fat}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Protein</strong></td>
                                            <td className="totalProtein">{recipe.sizes.small.nutritionTotals.Protein}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>

                            <Col className="recipeIngredient">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Amount (ounces)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.sizes.medium.ingredients.map(ingredient => (
                                            <tr key={ingredient.ingredientInfo.id}>
                                                <td className="ingredientName">{ingredient.ingredientInfo.IngredientName}</td>
                                                <td className="ingredientAmount">{ingredient.ingredientAmount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <td><strong>Total Calories</strong></td>
                                            <td className="totalCalories">{recipe.sizes.medium.nutritionTotals.Calories}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Carbs</strong></td>
                                            <td className="totalCarbs">{recipe.sizes.medium.nutritionTotals.Carbs}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Sugar</strong></td>
                                            <td className="totalSugar">{recipe.sizes.medium.nutritionTotals.Sugar}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Fat</strong></td>
                                            <td className="totalFat">{recipe.sizes.medium.nutritionTotals.Fat}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Protein</strong></td>
                                            <td className="totalProtein">{recipe.sizes.medium.nutritionTotals.Protein}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>

                            <Col className="recipeIngredient">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Amount (ounces)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.sizes.large.ingredients.map(ingredient => (
                                            <tr key={ingredient.ingredientInfo.id}>
                                                <td className="ingredientName">{ingredient.ingredientInfo.IngredientName}</td>
                                                <td className="ingredientAmount">{ingredient.ingredientAmount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <td><strong>Total Calories</strong></td>
                                            <td className="totalCalories">{recipe.sizes.large.nutritionTotals.Calories}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Carbs</strong></td>
                                            <td className="totalCarbs">{recipe.sizes.large.nutritionTotals.Carbs}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Sugar</strong></td>
                                            <td className="totalSugar">{recipe.sizes.large.nutritionTotals.Sugar}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Fat</strong></td>
                                            <td className="totalFat">{recipe.sizes.large.nutritionTotals.Fat}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Total Protein</strong></td>
                                            <td className="totalProtein">{recipe.sizes.large.nutritionTotals.Protein}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>

                        </Row>

                        <Row><h2>Medium Size</h2></Row>
                        <Row className="mediumSize">
                            <Col className="recipeIngredient">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Amount (ounces)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.sizes.medium.ingredients.map(ingredient => (
                                            <tr key={ingredient.ingredientInfo.id}>
                                                <td className="ingredientName">{ingredient.ingredientInfo.IngredientName}</td>
                                                <td className="ingredientAmount">{ingredient.ingredientAmount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col className="recipeTotals">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Total Calories</th>
                                            <th>Total Carbs</th>
                                            <th>Total Sugar</th>
                                            <th>Total Fat</th>
                                            <th>Total Protein</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="totalCalories">{recipe.sizes.medium.nutritionTotals.Calories}</td>
                                            <td className="totalCarbs">{recipe.sizes.medium.nutritionTotals.Carbs}</td>
                                            <td className="totalSugar">{recipe.sizes.medium.nutritionTotals.Sugar}</td>
                                            <td className="totalFat">{recipe.sizes.medium.nutritionTotals.Fat}</td>
                                            <td className="totalProtein">{recipe.sizes.medium.nutritionTotals.Protein}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <Row><h2>Large Size</h2></Row>
                        <Row className="largeSize">
                            <Col className="recipeIngredient">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Amount (ounces)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recipe.sizes.large.ingredients.map(ingredient => (
                                            <tr key={ingredient.ingredientInfo.id}>
                                                <td className="ingredientName">{ingredient.ingredientInfo.IngredientName}</td>
                                                <td className="ingredientAmount">{ingredient.ingredientAmount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col className="recipeTotals">
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Total Calories</th>
                                            <th>Total Carbs</th>
                                            <th>Total Sugar</th>
                                            <th>Total Fat</th>
                                            <th>Total Protein</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="totalCalories">{recipe.sizes.large.nutritionTotals.Calories}</td>
                                            <td className="totalCarbs">{recipe.sizes.large.nutritionTotals.Carbs}</td>
                                            <td className="totalSugar">{recipe.sizes.large.nutritionTotals.Sugar}</td>
                                            <td className="totalFat">{recipe.sizes.large.nutritionTotals.Fat}</td>
                                            <td className="totalProtein">{recipe.sizes.large.nutritionTotals.Protein}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>

                ))}
            </div>

        );
    }
}