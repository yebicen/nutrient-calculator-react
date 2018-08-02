import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IngredientForm from './IngredientForm'
import API from '../../utils/API';


export default class EditModal extends React.Component {
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
  

confirmEdit = (editIngredientId, editState) => {
    console.log(editIngredientId, editState)
    API.editIngredient(editIngredientId, editState)
        .then(this.props.getIngredients());
    this.props.toggle();
}

render() {
    const { toggle, modal, editIngredientName, editIngredientId } = this.props
    return (
        <div>
            <Modal isOpen={modal} fade={false} toggle={() => toggle("", "")}>
                <ModalHeader toggle={() => toggle("", "")}>Edit {editIngredientName}</ModalHeader>
                <ModalBody>
                    <IngredientForm
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        state={this.state}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => this.confirmEdit(editIngredientId, this.state)}>Submit</Button>{' '}
                    <Button color="primary" onClick={() => toggle("", "")}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
}