import React from 'react';
import { Container } from 'reactstrap';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import API from '../../utils/API';


export default class IngredientContainer extends React.Component {

  state = {
    dbRecipes: []
  }

  getRecipes = () => {
    // console.log('getRecipes Fired')
    API.getRecipes()
      .then(res => {
        console.log('getRecipes Fired')
        this.setState({
          dbRecipes: res.data
        })
        console.log(this.state)
      })
  }

  componentDidMount() {
    this.getRecipes();
  };

  render() {
    return (
      <Container>
        <AddRecipeForm getRecipes={this.getRecipes} dbRecipes={this.state.dbRecipes} />
        <RecipeList getRecipes={this.getRecipes} dbRecipes={this.state.dbRecipes} />
      </Container>
    );
  }
}