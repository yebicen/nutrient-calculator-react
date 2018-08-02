import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const IngredientForm = props => {
    const {handleInputChange, handleFormSubmit} = props
    const {IngredientName, Calories, Carbs, Sugar, Fat, Protein, hasGluten, isNut, isGMO} = props.state

      return (
        <Form>
          <FormGroup>
            <Label for="IngredientName">Ingredient Name</Label>
            <Input type="text" name="IngredientName" value={IngredientName} onChange={handleInputChange} placeholder="Ingredient Name" />
          </FormGroup>
          <FormGroup>
            <Label for="Calories">Calories per oz</Label>
            <Input type="number" name="Calories" value={Calories} onChange={handleInputChange} placeholder="Calories per oz" />
          </FormGroup>
          <FormGroup>
            <Label for="Carbs">Carbs per oz</Label>
            <Input type="number" name="Carbs" value={Carbs} onChange={handleInputChange} placeholder="Carbs per oz" />
          </FormGroup>
          <FormGroup>
            <Label for="Sugar">Sugar per oz</Label>
            <Input type="number" name="Sugar" value={Sugar} onChange={handleInputChange} placeholder="Sugar per oz" />
          </FormGroup>
          <FormGroup>
            <Label for="Fat">Fat per oz</Label>
            <Input type="number" name="Fat" value={Fat} onChange={handleInputChange} placeholder="Fat per oz" />
          </FormGroup>
          <FormGroup>
            <Label for="Protein">Protein per oz</Label>
            <Input type="number" name="Protein" value={Protein} onChange={handleInputChange} placeholder="Protein per oz" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="hasGluten" checked={hasGluten} onChange={handleInputChange} />{' '}
              Has Gluten?
                      </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="isNut" checked={isNut} onChange={handleInputChange} />{' '}
              Is a Nut?
                      </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="isGMO" checked={isGMO} onChange={handleInputChange} />{' '}
              is GMO?
                      </Label>
          </FormGroup>
          <Button onClick={handleFormSubmit}>Submit</Button>
        </Form>)
  }

  export default IngredientForm;