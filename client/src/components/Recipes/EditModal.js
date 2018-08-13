import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../../utils/API';

export default class EditModal extends React.Component {
    state = {
        RecipeName: "",
        RecipeDescription: "",
        RecipeType: "",
        selectedFile: null,
        ingredientList: [],
        RecipeIngredients: []
    };

    setEditState() {
        this.setState({
            RecipeName: this.props.prepopulateForm.RecipeName,
            RecipeDescription: this.props.prepopulateForm.RecipeDescription,
            RecipeType: this.props.prepopulateForm.RecipeType,
            // selectedFile: null,
            ingredientList: this.props.prepopulateForm.ingredientList,
            RecipeIngredients: this.props.prepopulateForm.RecipeIngredients
        })
        console.log(this.props.prepopulateForm)
        console.log(this.state)
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    confirmEdit = (editRecipeId, editState) => {
        API.editRecipe(editRecipeId, editState)
            .then(this.props.getRecipes());
        this.props.toggle();
    }

    render() {
        const { toggle, modal, editRecipeName, editRecipeId } = this.props
        return (
            <div>
                <Modal isOpen={modal} fade={false} toggle={() => toggle("","")}>
                    <ModalHeader toggle={() => toggle("","")}>Edit {editRecipeName}</ModalHeader>
                    <ModalBody>
                        {/* <RecipeForm
                            key={editRecipeId}
                            state={this.state}
                            handleInputChange={this.handleInputChange}
                        /> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.confirmEdit(editRecipeId, this.state)}>Submit</Button>{' '}
                        <Button color="primary" onClick={() => toggle("", "")}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}