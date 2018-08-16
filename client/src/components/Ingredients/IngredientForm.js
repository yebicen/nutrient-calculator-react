import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const IngredientForm = props => {
  const { handleInputChange } = props
  const { IngredientName, Calories, Carbs, Sugar, Fat, Protein, hasGluten, isNut, isGMO } = props.state
  return (
    <Form>
      <Row>
        <Col>
          <FormGroup>
            <Label for="IngredientName">Ingredient Name</Label>
            <Input type="text" name="IngredientName" value={IngredientName} onChange={handleInputChange} />
          </FormGroup>
        </Col>
        <Col>

          <FormGroup>
            <Label for="Calories">Calories per oz</Label>
            <Input type="number" name="Calories" value={Calories} onChange={handleInputChange} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="Carbs">Carbs per oz</Label>
            <Input type="number" name="Carbs" value={Carbs} onChange={handleInputChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label for="Sugar">Sugar per oz</Label>
            <Input type="number" name="Sugar" value={Sugar} onChange={handleInputChange} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="Fat">Fat per oz</Label>
            <Input type="number" name="Fat" value={Fat} onChange={handleInputChange} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="Protein">Protein per oz</Label>
            <Input type="number" name="Protein" value={Protein} onChange={handleInputChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="2">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="hasGluten" checked={hasGluten} onChange={handleInputChange} />
              Has Gluten?
                      </Label>
          </FormGroup>
        </Col>
        <Col md="2">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="isNut" checked={isNut} onChange={handleInputChange} />
              Is a Nut?
                      </Label>
          </FormGroup>
        </Col>
        <Col md="2">
          <FormGroup check>
            <Label check>
              <Input type="checkbox" name="isGMO" checked={isGMO} onChange={handleInputChange} />
              is GMO?
                      </Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default IngredientForm;