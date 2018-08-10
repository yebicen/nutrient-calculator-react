import React from 'react';
import { Container } from 'reactstrap';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import API from '../../utils/API';


export default class IngredientContainer extends React.Component {

  render() {
    return (
      <Container>
        <AddRecipeForm/>
        <RecipeList/>
      </Container>
    );
  }
}