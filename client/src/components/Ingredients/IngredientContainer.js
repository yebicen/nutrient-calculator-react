import React from 'react';
import { Container } from 'reactstrap';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';

export default class IngredientContainer extends React.Component {
    render() {
        return (
          <Container>
            <IngredientForm/>
            <IngredientList/>
          </Container>
        );
      }
}