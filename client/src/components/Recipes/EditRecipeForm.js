import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import API from '../../utils/API';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faTrash)


export default class EditRecipeForm extends React.Component {

    handleFormSubmit = event => {
        event.preventDefault();
        const { selectedFile, RecipeName, RecipeDescription, RecipeType, ingredientList, RecipeIngredients } = this.state;
        let formData = new FormData();
        formData.append('RecipeName', RecipeName);
        formData.append('RecipeDescription', RecipeDescription);
        formData.append('selectedFile', selectedFile);
        formData.append('RecipeType', RecipeType);
        formData.append('ingredientList', ingredientList);
        formData.append('RecipeIngredients', JSON.stringify(RecipeIngredients));
        // console.log("this is a handleFormSubmit")
        // console.log(JSON.stringify(this.state, null, 2))
        // const response = await API.addRecipe(formData);
        API.addRecipe(formData).then(result => {
            this.props.getRecipes()
        }
        )
        this.setState({
            RecipeName: "",
            RecipeDescription: "",
            RecipeType: "",
            selectedFile: null,
            RecipeIngredients: []
        });

    };



    render() {

        return (

            <div className="addRecipeForm">
                <h3>Add a New Recipe:</h3>
                <Form>
                    <Row className="recipeInfo">
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeName">Recipe Name</Label>
                                <Input type="text" name="RecipeName" value={this.props.state.RecipeName} onChange={this.props.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeDescription">Recipe Description</Label>
                                <Input type="text" name="RecipeDescription" value={this.props.state.RecipeDescription} onChange={this.props.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeType">Recipe Type</Label>
                                <Input type="text" name="RecipeType" value={this.props.state.RecipeType} onChange={this.props.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeImage">Recipe Image</Label>
                                <Input className="btn btn-secondary" type="file" name="RecipeImage" onChange={this.props.fileChangedHandler} />
                            </FormGroup>

                        </Col>
                    </Row>

                    {this.props.state.RecipeIngredients.map((addIngredient, idx) => (
                        <Row key={idx} className="formIngredient">
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="SelectIngredientName">Select Ingredient</Label>
                                    <Input type="select"
                                        name="IngredientName"
                                        value={addIngredient.IngredientName}
                                        onChange={this.props.handleIngredientChange(idx)}
                                        id="SelectIngredientName">

                                        {this.props.state.ingredientList.map(option => (
                                            <option key={option.id}
                                                data-id={option.id}
                                                value={option.IngredientName} >
                                                {option.IngredientName}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="AmountSmall">Amount for Small</Label>
                                    <Input type="text"
                                        name="AmountSmall"
                                        placeholder=""
                                        value={addIngredient.AmountForSmall}
                                        data-id={addIngredient.IngredientName}
                                        onChange={this.props.handleAmountSmallChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="AmountMedium">Amount for Medium</Label>
                                    <Input type="text"
                                        name="AmountMedium"
                                        placeholder=""
                                        value={addIngredient.AmountForMedium}
                                        onChange={this.props.handleAmountMediumChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="AmountLarge">Amount for Large</Label>
                                    <Input type="text"
                                        name="AmountLarge"
                                        placeholder=""
                                        value={addIngredient.AmountForLarge}
                                        onChange={this.props.handleAmountLargeChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <Button className="removeIngredientButton" color="danger" onClick={this.props.handleRemoveIngredient(idx)}><FontAwesomeIcon icon="trash" /></Button>
                            </Col>
                        </Row>
                    ))}

                    <Row>
                        <Col lg="10">
                            <Button className="addIngredientButton" color="success" onClick={this.props.handleAddIngredient}><FontAwesomeIcon icon="plus" /></Button>
                        </Col>
                        <Col lg="2">
                            <Button className="submitRecipeButton" color="primary" onClick={this.props.handleFormSubmit}>Submit Recipe</Button>
                        </Col>
                    </Row>

                </Form>
            </div>

        )
    }
}