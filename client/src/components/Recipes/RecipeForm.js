import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const RecipeForm = props => {
    const { handleInputChange } = props
    const { RecipeName, RecipeDescription, RecipeType } = props.state
    return (
        
            <Form>
                <Row>
                <Col xs="6" sm="4">
                    <FormGroup>
                        <Label for="RecipeName">Recipe Name</Label>
                        <Input type="text" name="RecipeName" value={RecipeName} onChange={handleInputChange} placeholder="Recipe Name" />
                    </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                    <FormGroup>
                        <Label for="RecipeDescription">Recipe Descriptio</Label>
                        <Input type="text" name="RecipeDescription" value={RecipeDescription} onChange={handleInputChange} placeholder="Recipe Description" />
                    </FormGroup>
                </Col>
                <Col xs="6" sm="4">
                    <FormGroup>
                        <Label for="RecipeType">Recipe Type</Label>
                        <Input type="text" name="RecipeType" value={RecipeType} onChange={handleInputChange} placeholder="Recipe Type" />
                    </FormGroup>
                </Col>
                </Row>
            </Form>
        )
}

export default RecipeForm;