import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import API from '../../utils/API';
// import IngredientForm from './IngredientForm'
import IngredientForm from './Valid_IngredientForm.js'

export default class AddIngredientForm extends React.Component {

  state = {
    IngredientName: "",
    Calories: "",
    Carbs: "",
    Sugar: "",
    Fat: "",
    Protein: "",
    hasGluten: false,
    isNut: false,
    isGMO: false
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

  handleSubmit = event => {
    event.persist();
    // event.preventDefault();
    API.addIngredient(this.state).then(
      this.props.getIngredients()
    )
    this.setState({
      IngredientName: "",
      Calories: "",
      Carbs: "",
      Sugar: "",
      Fat: "",
      Protein: "",
      hasGluten: false,
      isNut: false,
      isGMO: false
    });
    console.log("handleSubmit worked!")
    console.log(this.state)

  };

  render() {
    return (
      <div className="addIngredientForm">
        <AvForm onSubmit={this.handleSubmit}>
          <IngredientForm
            handleInputChange={this.handleInputChange}
            state={this.state}
          />
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
          {/* <FormGroup>
            <Button handleFormSubmit={()=>this.handleFormSubmit}>Submit</Button>
          </FormGroup> */}
        </AvForm>
      </div>
    )
  }
}