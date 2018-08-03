import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../../utils/API';
import RecipeForm from './RecipeForm';
import NewIngredient from './NewIngredient'


export default class AddRecipeForm extends React.Component {

    state = {
        RecipeName: "",
        RecipeDescription: "",
        RecipeType: "",
        AmountSmall: "",
        AmountMedium: "",
        AmountLarge: "",
        dbIngredients: []
    };

    getIngredients = () => {
        API.getIngredients()
            .then(res => {
                console.log(res.data);
                this.setState({ dbIngredients: res.data })
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

    handleFormSubmit = event => {
        event.preventDefault();
        API.addRecipe(this.state).then(
            this.props.getRecipes()
        )
        this.setState({
            RecipeName: "",
            RecipeDescription: "",
            RecipeType: "",
            AmountSmall: "",
            AmountMedium: "",
            AmountLarge: ""
        });
    };

    render() {
        return (
            <div className="addRecipeForm">
                <RecipeForm
                    handleInputChange={this.handleInputChange}
                    state={this.state}
                />
                <NewIngredient
                    handleInputChange={this.handleInputChange}
                    state={this.state}
                />
                <Button >Add New Ingredient</Button>
                <Button onClick={this.handleFormSubmit}>Submit</Button>
            </div>
        )
    }
}