import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const IngredientForm = props => {
    return (
      <Form>
        <FormGroup>
          <Label for="IngredientName">Ingredient Name</Label>
          <Input type="text" name="IngredientName" value={props.state.IngredientName} onChange={props.handleInputChange} placeholder="Ingredient Name" />
        </FormGroup>
        <FormGroup>
          <Label for="Calories">Calories per oz</Label>
          <Input type="number" name="Calories" value={props.state.Calories} onChange={props.handleInputChange} placeholder="Calories per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Carbs">Carbs per oz</Label>
          <Input type="number" name="Carbs" value={props.state.Carbs} onChange={props.handleInputChange} placeholder="Carbs per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Sugar">Sugar per oz</Label>
          <Input type="number" name="Sugar" value={props.state.Sugar} onChange={props.handleInputChange} placeholder="Sugar per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Fat">Fat per oz</Label>
          <Input type="number" name="Fat" value={props.state.Fat} onChange={props.handleInputChange} placeholder="Fat per oz" />
        </FormGroup>
        <FormGroup>
          <Label for="Protein">Protein per oz</Label>
          <Input type="number" name="Protein" value={props.state.Protein} onChange={props.handleInputChange} placeholder="Protein per oz" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="hasGluten" checked={props.state.hasGluten} onChange={props.handleInputChange} />{' '}
            Has Gluten?
                    </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="isNut" checked={props.state.isNut} onChange={props.handleInputChange} />{' '}
            Is a Nut?
                    </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="isGMO" checked={props.state.isGMO} onChange={props.handleInputChange} />{' '}
            is GMO?
                    </Label>
        </FormGroup>
        <Button onClick={props.handleFormSubmit}>Submit</Button>
      </Form>)
}

export default IngredientForm;