import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class IngredientForm extends React.Component {

  state = {
    ingredientname: "",
    calories: "",
    carbs: "",
    sugar: "",
    fat: "",
    protein: "",
    gluten: false,
    nut: false,
    gmo: false
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
    console.log(this.state);
    this.setState({
      ingredientname: "",
      calories: "",
      carbs: "",
      sugar: "",
      fat: "",
      protein: "",
      gluten: false,
      nut: false,
      gmo: false
    });
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="ingredientname">Ingredient Name</Label>
          <Input type="text" name="ingredientname" value={this.state.ingredientname} onChange={this.handleInputChange} placeholder="Ingredient Name" />
        </FormGroup>
        <FormGroup>
          <Label for="calories">Calories per oz</Label>
          <Input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} placeholder="Calories per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="carbs">Carbs per oz</Label>
          <Input type="number" name="carbs" value={this.state.carbs} onChange={this.handleInputChange} placeholder="Carbs per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="sugar">Sugar per oz</Label>
          <Input type="number" name="sugar" value={this.state.sugar} onChange={this.handleInputChange} placeholder="Sugar per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="fat">Fat per oz</Label>
          <Input type="number" name="fat" value={this.state.fat} onChange={this.handleInputChange} placeholder="Fat per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="protein">Protein per oz</Label>
          <Input type="number" name="protein" value={this.state.protein} onChange={this.handleInputChange} placeholder="Protein per oz" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="gluten" checked={this.state.gluten} onChange={this.handleInputChange} />{' '}
            Gluten
                    </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="nut" checked={this.state.nut} onChange={this.handleInputChange} />{' '}
            Nut
                    </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="gmo" checked={this.state.gmo} onChange={this.handleInputChange} />{' '}
            GMO
                    </Label>
        </FormGroup>
        <Button onClick={this.handleFormSubmit}>Submit</Button>
      </Form>)
  }
}
