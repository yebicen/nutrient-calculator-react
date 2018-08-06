import React from 'react';
import { Container } from 'reactstrap';
import AddIngredientForm from './AddIngredientForm';
import IngredientList from './IngredientList';
import API from '../../utils/API';


export default class IngredientContainer extends React.Component {
  state = {
    dbIngredients: []
  }

  getIngredients = () => {
    API.getIngredients()
      .then(res => {
        this.setState({ dbIngredients: res.data })
      })
  }

  componentDidMount() {
    this.getIngredients();
  };

  render() {
    return (
      <Container>
        <AddIngredientForm getIngredients={this.getIngredients} dbIngredients={this.state.dbIngredients}/>
        <IngredientList getIngredients={this.getIngredients} dbIngredients={this.state.dbIngredients}/>
      </Container>
    );
  }
}