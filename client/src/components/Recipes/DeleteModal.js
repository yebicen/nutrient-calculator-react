import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import API from '../../utils/API';


const DeleteModal = props => {
  //destructure props
  const { toggle, modal, deleteRecipeName, deleteRecipeId, getRecipes } = props

  const confirmDelete = (deleteRecipeId) => {
    API.deleteRecipe(deleteRecipeId)
      .then(getRecipes());
    toggle();
  }

    return (
      <div>
        <Modal isOpen={modal} fade={false} toggle={() => toggle("","")}>
          <ModalHeader toggle={() => toggle("", "")}>Delete {deleteRecipeName}</ModalHeader>
          <ModalBody>
            Are you sure you want to delete <strong>{deleteRecipeName}</strong>?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => confirmDelete(deleteRecipeId)}>Delete</Button>{' '}
            <Button color="primary" onClick={() => toggle("","")}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default DeleteModal;