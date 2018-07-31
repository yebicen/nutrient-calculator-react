import React from 'react';
import { Container } from 'reactstrap';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import API from '../../utils/API'
import DeleteModal from './DeleteModal'

export default class IngredientContainer extends React.Component {
  state = {
    IngredientName: "",
    Calories: "",
    Carbs: "",
    Sugar: "",
    Fat: "",
    Protein: "",
    hasGluten: false,
    isNut: false,
    isGMO: false,
    dbIngredients: [],
    modal: false,
    deleteIngredientName: "",
    deleteId: ""
  };

  getIngredients = () => {
    API.getIngredients()
      .then(res => {
        console.log(res.data);
        this.setState({ dbIngredients: res.data })
      })
  }

  componentDidMount() {
    this.getIngredients();
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.addIngredient(this.state).then(
      res=> {
        this.getIngredients()
      })
    console.log(this.state);
    this.setState({
      IngredientName: "",
      Calories: "",
      Carbs: "",
      Sugar: "",
      Fat: "",
      Protein: "",
      hasGluten: false,
      isNut: false,
      isGMO: false,
      dbIngredients: []
    });
  };

  toggle = (deleteIngredient,deleteId) => {
    this.setState({
      modal: !this.state.modal,
      deleteIngredientName: deleteIngredient,
      deleteId: deleteId
    });
  }

  deleteIngredient = (deleteId) => {
    API.deleteIngredient(deleteId)
    .then(this.getIngredients());
    this.toggle();
  }

  render() {
    return (
      <Container>
        <IngredientForm handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} state={this.state} />
        <IngredientList dbIngredients={this.state.dbIngredients} toggle={this.toggle}/>
        <DeleteModal modal={this.state.modal} toggle={this.toggle} deleteId={this.state.deleteId} deleteIngredientName={this.state.deleteIngredientName} deleteIngredient={this.deleteIngredient}/>
      </Container>
    );
  }
}