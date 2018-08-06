import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import API from '../../utils/API';


export default class AddRecipeForm extends React.Component {
    state = {
        RecipeName: "",
        RecipeDescription: "",
        RecipeType: "",
        ingredientList: [],
        addIngredients: []
    };

    handleAddIngredient = () => {
        this.setState({
            addIngredients: this.state.addIngredients.concat([
                {
                    IngredientName: '',
                    AmountForSmall: 0,
                    AmountForMedium: 0,
                    AmountForLarge: 0
                }
            ])
        });
        console.log('addingredients:'+ JSON.stringify(this.state.addIngredients))
    }

    getIngredients = () => {
        API.getIngredients()
            .then(res => {
                this.setState({ ingredientList: res.data })
            })
            console.log('Ingredientlist:')
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

    handleAmountSmallChange = (idx) => (evt) => {
        const newIngredients = this.state.addIngredients.map((addIngredient, sidx) => {
          if (idx !== sidx) return addIngredient;
          return { ...addIngredient, AmountForSmall: evt.target.value};
        });
        
        this.setState({ addIngredients: newIngredients });
      }

      handleAmountMediumChange = (idx) => (evt) => {
        const newIngredients = this.state.addIngredients.map((addIngredient, sidx) => {
          if (idx !== sidx) return addIngredient;
          return { ...addIngredient, AmountForMedium: evt.target.value};
        });
        
        this.setState({ addIngredients: newIngredients });
      }

      handleAmountLargeChange = (idx) => (evt) => {
        const newIngredients = this.state.addIngredients.map((addIngredient, sidx) => {
          if (idx !== sidx) return addIngredient;
          return { ...addIngredient, AmountForLarge: evt.target.value};
        });
        
        this.setState({ addIngredients: newIngredients });
      }

      handleIngredientChange = (idx) => (evt) => {
        const newIngredients = this.state.addIngredients.map((addIngredient, sidx) => {
          if (idx !== sidx) return addIngredient;
          return { ...addIngredient, IngredientName: evt.target.value};
        });
        // console.log('HOLA '+this.state.addIngredients)
        this.setState({ addIngredients: newIngredients });
      }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("this is a handleFormSubmit")
        console.log(JSON.stringify(this.state))
        // API.addRecipe(this.state).then(
        //     this.props.getRecipes()
        // )
        this.setState({
            RecipeName: "",
            RecipeDescription: "",
            RecipeType: ""
        });

    };

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
                                <Label for="RecipeDescription">Recipe Descriptio</Label>
                                <Input type="text" name="RecipeDescription" value={this.state.RecipeDescription} onChange={this.handleInputChange} placeholder="Recipe Description" />
                            </FormGroup>
                        </Col>
                        <Col xs="6" sm="4">
                            <FormGroup>
                                <Label for="RecipeType">Recipe Type</Label>
                                <Input type="text" name="RecipeType" value={this.state.RecipeType} onChange={this.handleInputChange} placeholder="Recipe Type" />
                            </FormGroup>
                        </Col>
                    </Row>

                    {this.state.addIngredients.map((addIngredient, idx) => (
                        <Row key={idx}>
                            <Col xs="6" sm="3">
                                <FormGroup>
                                    <Label for="SelectIngredientName">Select Ingredient</Label>
                                    <Input type="select" 
                                            name="IngredientName" 
                                            value={addIngredient.IngredientName} 
                                            onChange={this.handleIngredientChange(idx)} 
                                            id="SelectIngredientName">
                                        {this.state.ingredientList.map(option => (
                                            <option key={option.id} value={option.IngredientName} >{option.IngredientName}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col xs="6" sm="3">
                                <FormGroup>
                                    <Label for="AmountSmall">Amount for Small</Label>
                                    <Input type="text"
                                        name="AmountSmall"
                                        placeholder="Amount for Small"
                                        value={addIngredient.AmountSmall}
                                        onChange={this.handleAmountSmallChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="6" sm="3">
                                <FormGroup>
                                    <Label for="AmountMedium">Amount for Medium</Label>
                                    <Input type="text"
                                        name="AmountMedium"
                                        placeholder="Amount for Mediumn"
                                        value={addIngredient.AmountMedium}
                                        onChange={this.handleAmountMediumChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="6" sm="3">
                                <FormGroup>
                                    <Label for="AmountLarge">Amount for Large</Label>
                                    <Input type="text"
                                        name="AmountLarge"
                                        placeholder="Amount for Large"
                                        value={addIngredient.AmountLarge}
                                        onChange={this.handleAmountLargeChange(idx)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    ))}
                    <Row>
                        <Button onClick={this.handleAddIngredient}>Add New Ingredient</Button>
                    </Row>

                    <Row>

                    </Row>
                    <Button onClick={this.handleFormSubmit}>Submit</Button>
                </Form>
            </div>

        )
    }
}