import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

const NewIngredient = props => {
    const { handleInputChange } = props
    const { AmountSmall, AmountMedium, AmountLarge, dbIngredients } = props.state
    return (
        <Form>
            <Row>
                <Col xs="6" sm="3">
                    <FormGroup>
                        <Label for="exampleSelect">Select Ingredient</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            {dbIngredients.map(item => (
                                <option key={item.id}>{item.IngredientName}</option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="6" sm="3">
                    <FormGroup>
                        <Label for="AmountSmall">Amount for Small</Label>
                        <Input type="text" name="AmountSmall" value={AmountSmall} onChange={handleInputChange} placeholder="Amount for Small" />
                    </FormGroup>
                </Col>
                <Col xs="6" sm="3">
                    <FormGroup>
                        <Label for="AmountMedium">Amount for Medium</Label>
                        <Input type="text" name="AmountMedium" value={AmountMedium} onChange={handleInputChange} placeholder="Amount for Mediumn" />
                    </FormGroup>
                </Col>
                <Col xs="6" sm="3">
                    <FormGroup>
                        <Label for="AmountLarge">Amount for Large</Label>
                        <Input type="text" name="AmountLarge" value={AmountLarge} onChange={handleInputChange} placeholder="Amount for Large" />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default NewIngredient;