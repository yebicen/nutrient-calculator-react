import React from 'react';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export default class IngredientForm extends React.Component {

    render() {

        return (

            <div>
                <AvField type="text" name="IngredientName" label="Ingredient Name" value={this.props.IngredientName} onChange={this.props.handleInputChange} required />
                <AvField type="number" name="Calories" label="Calories per oz" value={this.props.Calories} onChange={this.props.handleInputChange} required />
                <AvField type="number" name="Carbs" label="Carbs per oz" value={this.props.Carbs} onChange={this.props.handleInputChange} required />
                <AvField type="number" name="Sugar" label="Sugar per oz" value={this.props.Sugar} onChange={this.props.handleInputChange} required />
                <AvField type="number" name="Fat" label="Fat per oz" value={this.props.Fat} onChange={this.props.handleInputChange} required />
                <AvField type="number" name="Protein" label="Protein per oz" value={this.props.Protein} onChange={this.props.handleInputChange} required />
                <AvGroup check>
                    <Label check>
                        <AvInput type="checkbox" name="hasGluten" checked={this.props.hasGluten} onChange={this.props.handleInputChange} /> Has Gluten?
                    </Label>
                </AvGroup>
                <AvGroup check>
                    <Label check>
                        <AvInput type="checkbox" name="isNut" checked={this.props.isNut} onChange={this.props.handleInputChange} /> Is Nut?
                    </Label>
                </AvGroup>
                <AvGroup check>
                    <Label check>
                        <AvInput type="checkbox" name="isGMO" checked={this.props.isGMO} onChange={this.props.handleInputChange} /> Is GMO?
                    </Label>
                </AvGroup>
            </div>
            // <Form>
            //   <FormGroup onClick={this.props.handleFormSubmit}>
            //     <Label for="IngredientName">Ingredient Name</Label>
            //     <Input type="text" name="IngredientName" value={IngredientName} onChange={handleInputChange} placeholder="Ingredient Name"/>
            //   </FormGroup>
            //   <FormGroup>
            //     <Label for="Calories">Calories per oz</Label>
            //     <Input type="number" name="Calories" value={Calories} onChange={handleInputChange} placeholder="Calories per oz"/>
            //   </FormGroup>
            //   <FormGroup>
            //     <Label for="Carbs">Carbs per oz</Label>
            //     <Input type="number" name="Carbs" value={Carbs} onChange={handleInputChange} placeholder="Carbs per oz"/>
            //   </FormGroup>
            //   <FormGroup>
            //     <Label for="Sugar">Sugar per oz</Label>
            //     <Input type="number" name="Sugar" value={Sugar} onChange={handleInputChange} placeholder="Sugar per oz"/>
            //   </FormGroup>
            //   <FormGroup>
            //     <Label for="Fat">Fat per oz</Label>
            //     <Input type="number" name="Fat" value={Fat} onChange={handleInputChange} placeholder="Fat per oz"/>
            //   </FormGroup>
            //   <FormGroup>
            //     <Label for="Protein">Protein per oz</Label>
            //     <Input type="number" name="Protein" value={Protein} onChange={handleInputChange} placeholder="Protein per oz"/>
            //   </FormGroup>
            //   <FormGroup check>
            //     <Label check>
            //       <Input type="checkbox" name="hasGluten" checked={hasGluten} onChange={handleInputChange}/>
            //       Has Gluten?
            //               </Label>
            //   </FormGroup>
            //   <FormGroup check>
            //     <Label check>
            //       <Input type="checkbox" name="isNut" checked={isNut} onChange={handleInputChange} />
            //       Is a Nut?
            //               </Label>
            //   </FormGroup>
            //   <FormGroup check>
            //     <Label check>
            //       <Input type="checkbox" name="isGMO" checked={isGMO} onChange={handleInputChange} />
            //       is GMO?
            //               </Label>
            //   </FormGroup>
            // </Form>
        )
    }
}
