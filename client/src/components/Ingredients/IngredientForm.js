import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../../utils/API';

export default class IngredientForm extends React.Component {
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
      isGMO: false
    });
  };

  render () {
    return (
      <Form>
        <FormGroup>
          <Label for="IngredientName">Ingredient Name</Label>
          <Input type="text" name="IngredientName" value={this.state.IngredientName} onChange={this.handleInputChange} placeholder="Ingredient Name" />
        </FormGroup>
        <FormGroup>
          <Label for="Calories">Calories per oz</Label>
          <Input type="number" name="Calories" value={this.state.Calories} onChange={this.handleInputChange} placeholder="Calories per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Carbs">Carbs per oz</Label>
          <Input type="number" name="Carbs" value={this.state.Carbs} onChange={this.handleInputChange} placeholder="Carbs per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Sugar">Sugar per oz</Label>
          <Input type="number" name="Sugar" value={this.state.Sugar} onChange={this.handleInputChange} placeholder="Sugar per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Fat">Fat per oz</Label>
          <Input type="number" name="Fat" value={this.state.Fat} onChange={this.handleInputChange} placeholder="Fat per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Protein">Protein per oz</Label>
          <Input type="number" name="Protein" value={this.state.Protein} onChange={this.handleInputChange} placeholder="Protein per oz" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="hasGluten" checked={this.state.hasGluten} onChange={this.handleInputChange} />{' '}
            Has Gluten?
                    </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="isNut" checked={this.state.isNut} onChange={this.handleInputChange} />{' '}
            Is a Nut?
                    </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="isGMO" checked={this.state.isGMO} onChange={this.handleInputChange} />{' '}
            is GMO?
                    </Label>
        </FormGroup>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Form>)
  }
}