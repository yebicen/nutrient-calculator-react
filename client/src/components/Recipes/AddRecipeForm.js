import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import API from '../../utils/API';


export default class AddRecipeForm extends React.Component {
    state = {
        RecipeName: "",
        RecipeDescription: "",
        RecipeType: "",
        selectedFile: null,
        ingredientList: [],
        RecipeIngredients: []
    };

    getIngredients = () => {
        API.getIngredients()
            .then(res => {
                this.setState({ ingredientList: res.data })
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

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.addRecipe(this.state).then(
    //         console.log('posted')
    //     )
    //     this.setState({
    //         RecipeName: "",
    //         RecipeDescription: "",
    //         RecipeType: "",
    //         RecipeIngredients: []
    //     });

    // };

    handleFormSubmit = event => {
        event.preventDefault();
        const { selectedFile, RecipeName, RecipeDescription, RecipeType, ingredientList, RecipeIngredients} = this.state;
          let formData = new FormData();
          formData.append('RecipeName',RecipeName);
          formData.append('RecipeDescription',RecipeDescription);
          formData.append('selectedFile', selectedFile);
          formData.append('RecipeType',RecipeType);
          formData.append('ingredientList',ingredientList);
          formData.append('RecipeIngredients',RecipeIngredients);
        // console.log("this is a handleFormSubmit")
        // console.log(JSON.stringify(this.state, null, 2))
        API.addRecipe(formData).then(
            // console.log('posted')
        )
        this.setState({
            RecipeName: "",
            RecipeDescription: "",
            RecipeType: "",
            selectedFile:null,
            RecipeIngredients: []
        });

    };
    
    fileChangedHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);
        this.setState({selectedFile: event.target.files[0]})
      }
      




    render() {

        return (
            <div className="addRecipeForm">
                <Form >
                    <Row>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeName">Recipe Name</Label>
                                <Input type="text" name="RecipeName" value={this.state.RecipeName} onChange={this.handleInputChange} placeholder="Recipe Name" />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeDescription">Recipe Description</Label>
                                <Input type="text" name="RecipeDescription" value={this.state.RecipeDescription} onChange={this.handleInputChange} placeholder="Recipe Description" />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeType">Recipe Type</Label>
                                <Input type="text" name="RecipeType" value={this.state.RecipeType} onChange={this.handleInputChange} placeholder="Recipe Type" />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeImage">Recipe Image</Label>
                                <Input type="file" name="RecipeImage" onChange={this.fileChangedHandler} />
                            </FormGroup>

                        </Col>
                    </Row>

                    {this.state.RecipeIngredients.map((addIngredient, idx) => (
                        <Row key={idx}>
                            <Col xs="12" sm="3" md="2">
                                Ingredient {idx + 1}
                            </Col>
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
                                    <Label for="AmountSmall">Amount for Small</Label>
                                    <Input type="text"
                                        name="AmountSmall"
                                        placeholder="Amount for Small"
                                        value={addIngredient.AmountForSmall}
                                        data-id={addIngredient.IngredientName}
                                        onChange={this.handleAmountSmallChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="AmountMedium">Amount for Medium</Label>
                                    <Input type="text"
                                        name="AmountMedium"
                                        placeholder="Amount for Mediumn"
                                        value={addIngredient.AmountForMedium}
                                        onChange={this.handleAmountMediumChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <FormGroup>
                                    <Label for="AmountLarge">Amount for Large</Label>
                                    <Input type="text"
                                        name="AmountLarge"
                                        placeholder="Amount for Large"
                                        value={addIngredient.AmountForLarge}
                                        onChange={this.handleAmountLargeChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="12" sm="3" md="2">
                                <Button onClick={this.handleRemoveIngredient(idx)}>Remove</Button>
                            </Col>
                        </Row>
                    ))}

                    <Row>
                        <Col>
                            <Button className="addIngredientButton" color="info" onClick={this.handleAddIngredient}>Add Another Ingredient</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button color="primary" onClick={this.handleFormSubmit}>Submit</Button>
                        </Col>
                    </Row>

                </Form>
            </div>

        )
    }
}