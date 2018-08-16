import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import API from '../../utils/API';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faTrash)


export default class AddRecipeForm extends React.Component {
    state = {
        RecipeName: "",
        RecipeDescription: "",
        RecipeType: "",
        selectedFile: "",
        ingredientList: [],
        RecipeIngredients: [],
        filekey: ''
    };

    getIngredients = () => {
        API.getIngredients()
            .then(res => {
                this.setState({
                    ingredientList: res.data
                })
                this.state.ingredientList.unshift({
                    "id": null,
                    "IngredientName": ""
                })
            })

    };

    componentDidMount() {
        this.getIngredients();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleAddIngredient = () => {
        this.setState({
            RecipeIngredients: this.state.RecipeIngredients.concat([
                {
                    IngredientName: '',
                    IngredientId: null,
                    AmountForSmall: '',
                    AmountForMedium: '',
                    AmountForLarge: ''
                }
            ])
        });
        // console.log('RecipeIngredients:' + JSON.stringify(this.state.RecipeIngredients, null, 2))
    }

    handleRemoveIngredient = (idx) => () => {
        let newIgrdients = this.state.RecipeIngredients
        newIgrdients.splice(idx, 1)
        this.setState({ RecipeIngredients: newIgrdients });
    }

    handleAmountSmallChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;
            return { ...addIngredient, AmountForSmall: evt.target.value };
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

    handleAmountMediumChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;
            return { ...addIngredient, AmountForMedium: evt.target.value };
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

    handleAmountLargeChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;
            return { ...addIngredient, AmountForLarge: evt.target.value };
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

    handleIngredientChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;

            for (let node of evt.target.children) {
                if (node.value === evt.target.value) {
                    return (
                        {
                            ...addIngredient,
                            IngredientName: evt.target.value,
                            IngredientId: node.getAttribute('data-id')
                        }
                    );
                }
            }
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

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

        this.resetFileInput();

    };

    fileChangedHandler = (event) => {
        const file = event.target.files[0];
        // console.log(file);
        this.setState({ selectedFile: event.target.files[0] })
    }

    resetFileInput = () => {
        let randomString = Math.random().toString(36);

        this.setState({
            filekey: randomString
        });
    }

    render() {

        return (

            <div className="addRecipeForm">
                <h3>Add a New Recipe:</h3>
                <Form>
                    <Row className="recipeInfo">
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeName">Recipe Name</Label>
                                <Input type="text" name="RecipeName" placeholder="Name for your recipe" value={this.state.RecipeName} onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeDescription">Description</Label>
                                <Input type="text" name="RecipeDescription" placeholder="Enter description" value={this.state.RecipeDescription} onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeType">Type</Label>
                                <Input type="text" name="RecipeType" placeholder="E.g smoothie" value={this.state.RecipeType} onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeImage">Image</Label>
                                <Input className="btn btn-secondary" type="file" key={this.state.filekey || ''} name="RecipeImage" onChange={this.fileChangedHandler} />
                            </FormGroup>

                        </Col>
                    </Row>
                    <Row className="ingredientTitleRow">
                        <Col>
                            <strong>Ingredients:</strong>
                        </Col>
                    </Row>
                    {this.state.RecipeIngredients.map((addIngredient, idx) => (
                        <Row key={idx} className="formIngredient">
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="SelectIngredientName">Select Ingredient</Label>
                                    <Input type="select"
                                        name="IngredientName"
                                        value={addIngredient.IngredientName}
                                        onChange={this.handleIngredientChange(idx)}
                                        id="SelectIngredientName">

                                        {this.state.ingredientList.map(option => (
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
                                    <Label for="AmountSmall">Small</Label>
                                    <Input type="text"
                                        name="AmountSmall"
                                        placeholder=""
                                        value={addIngredient.AmountForSmall}
                                        data-id={addIngredient.IngredientName}
                                        onChange={this.handleAmountSmallChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="AmountMedium">Medium</Label>
                                    <Input type="text"
                                        name="AmountMedium"
                                        placeholder=""
                                        value={addIngredient.AmountForMedium}
                                        onChange={this.handleAmountMediumChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="AmountLarge">Large</Label>
                                    <Input type="text"
                                        name="AmountLarge"
                                        placeholder=""
                                        value={addIngredient.AmountForLarge}
                                        onChange={this.handleAmountLargeChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <Button className="removeIngredientButton" color="danger" onClick={this.handleRemoveIngredient(idx)}><FontAwesomeIcon icon="trash" /></Button>
                            </Col>
                        </Row>
                    ))}

                    <Row>
                        <Col lg="10">
                            <Button className="addIngredientButton" color="success" onClick={this.handleAddIngredient}><FontAwesomeIcon icon="plus" /></Button>
                        </Col>
                        <Col lg="2">
                            <Button className="submitRecipeButton" color="primary" onClick={this.handleFormSubmit}>Submit Recipe</Button>
                        </Col>
                    </Row>

                </Form>
            </div>

        )
    }
}