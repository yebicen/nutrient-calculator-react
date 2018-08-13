import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from '../../utils/API';
import EditRecipeForm from './EditRecipeForm'

export default class EditModal extends React.Component {
    state = {
        RecipeName: "",
        RecipeDescription: "",
        RecipeImage: "",
        // RecipeType: "",
        selectedFile: null,
        ingredientList: [],
        RecipeIngredients: []
    };

    setEditState() {
        API.getIngredients()
        .then(res => {
            this.setState({
                RecipeName: this.props.prepopulateForm.RecipeName,
                RecipeDescription: this.props.prepopulateForm.RecipeDescription,
                RecipeImage: this.props.prepopulateForm.RecipeImage,
                // RecipeType: this.props.prepopulateForm.RecipeType,
                // selectedFile: null,
                ingredientList: this.props.prepopulateForm.ingredientList,
                RecipeIngredients: this.props.prepopulateForm.RecipeIngredients,
                ingredientList: res.data
            })
            this.state.ingredientList.unshift({
                "id": null,
                "IngredientName": ""
            })
        })
        // this.setState({

        // })
        console.log(this.state)
    }

    // getIngredients = () => {
    //     API.getIngredients()
    //         .then(res => {
    //             this.setState({
    //                 ingredientList: res.data
    //             })
    //             this.state.ingredientList.unshift({
    //                 "id": null,
    //                 "IngredientName": ""
    //             })
    //         })
    // };

    // componentDidMount() {
    //     this.getIngredients();
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    confirmEdit = (editRecipeId, editState) => {
        API.editRecipe(editRecipeId, editState)
            .then(this.props.getRecipes());
        this.props.toggle();
    }

    handleAddIngredient = () => {
        this.setState({
            RecipeIngredients: this.state.RecipeIngredients.concat([
                {
                    IngredientName: '',
                    IngredientId: null,
                    AmountForSmall: '',
                    AmountForMedium: '',
                    AmountForLarge: ''
                }
            ])
        });
        // console.log('RecipeIngredients:' + JSON.stringify(this.state.RecipeIngredients, null, 2))
    }

    fileChangedHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);
        this.setState({ selectedFile: event.target.files[0] })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleRemoveIngredient = (idx) => () => {
        let newIgrdients = this.state.RecipeIngredients
        newIgrdients.splice(idx, 1)
        this.setState({ RecipeIngredients: newIgrdients });
    }

    handleAmountSmallChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;
            return { ...addIngredient, AmountForSmall: evt.target.value };
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

    handleAmountMediumChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;
            return { ...addIngredient, AmountForMedium: evt.target.value };
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

    handleAmountLargeChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;
            return { ...addIngredient, AmountForLarge: evt.target.value };
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

    handleIngredientChange = (idx) => (evt) => {
        const newIngredients = this.state.RecipeIngredients.map((addIngredient, sidx) => {
            if (idx !== sidx) return addIngredient;

            for (let node of evt.target.children) {
                if (node.value === evt.target.value) {
                    return (
                        {
                            ...addIngredient,
                            IngredientName: evt.target.value,
                            IngredientId: node.getAttribute('data-id')
                        }
                    );
                }
            }
        });

        this.setState({ RecipeIngredients: newIngredients });
    }

    render() {
        const { toggle, modal, editRecipeName, editRecipeId } = this.props
        return (
            <div>
                <Modal isOpen={modal} fade={false} toggle={() => toggle("","")}>
                    <ModalHeader toggle={() => toggle("","")}>Edit {editRecipeName}</ModalHeader>
                    <ModalBody>
                        <EditRecipeForm
                            key={editRecipeId}
                            state={this.state}
                            handleInputChange={this.handleInputChange}
                            handleAddIngredient={this.handleAddIngredient}
                            handleRemoveIngredient={this.handleRemoveIngredient}
                            fileChangedHandler={this.fileChangedHandler}
                            handleAmountSmallChange={this.handleAmountSmallChange}
                            handleAmountMediumChange={this.handleAmountMediumChange}
                            handleAmountLargeChange={this.handleAmountLargeChange}
                            handleIngredientChange={this.handleIngredientChange}s
                        />
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