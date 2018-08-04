import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class NewIngredient extends React.Component {
    state = {
        IngredientName: "",
        AmountSmall: "",
        AmountMedium: "",
        AmountLarge: "",
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    render() {
        const dbIngredients = this.props.state.dbIngredients

        return (
            <Form>
                <Row>
                    <Col xs="6" sm="3">
                        <FormGroup>
                            <Label for="SelectIngredientName">Select Ingredient</Label>
                            <Input type="select" name="IngredientName" value={this.state.IngredientName} onChange={this.handleInputChange} id="SelectIngredientName">
                                {dbIngredients.map(item => (
                                    <option key={item.id}>{item.IngredientName}</option>
                                ))}
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col xs="6" sm="3">
                        <FormGroup>
                            <Label for="AmountSmall">Amount for Small</Label>
                            <Input type="text" name="AmountSmall" value={this.state.AmountSmall} onChange={this.handleInputChange} placeholder="Amount for Small" />
                        </FormGroup>
                    </Col>
                    <Col xs="6" sm="3">
                        <FormGroup>
                            <Label for="AmountMedium">Amount for Medium</Label>
                            <Input type="text" name="AmountMedium" value={this.state.AmountMedium} onChange={this.handleInputChange} placeholder="Amount for Mediumn" />
                        </FormGroup>
                    </Col>
                    <Col xs="6" sm="3">
                        <FormGroup>
                            <Label for="AmountLarge">Amount for Large</Label>
                            <Input type="text" name="AmountLarge" value={this.state.AmountLarge} onChange={this.handleInputChange} placeholder="Amount for Large" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default NewIngredient;