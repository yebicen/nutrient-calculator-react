import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
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
        dbIngredients: [],
        numChildren: 0
    };

    onAddChild = () => {
        console.log("clicked")
        this.setState({
            numChildren: this.state.numChildren + 1
        });
        console.log(this.state.numChildren)
        this.render()
    }

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

    cloneNewIngredient = () => {
        React.cloneElement(NewIngredient)
    }

    render() {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<NewIngredient key={i} number={i} handleInputChange={this.handleInputChange}
                state={this.state} />);
        };

        return (
            <div className="addRecipeForm">
                <RecipeForm
                    handleInputChange={this.handleInputChange}
                    state={this.state}
                />{children}
                {/* <NewIngredient
                    handleInputChange={this.handleInputChange}
                    state={this.state}
                >   */}
                {/* {children} */}
                {/* </NewIngredient> */}
                <Button onClick={this.onAddChild}>Add New Ingredient</Button>
                <Row />
                <Button onClick={this.handleFormSubmit}>Submit</Button>
            </div>
        )
    }
}