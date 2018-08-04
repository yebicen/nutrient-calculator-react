import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import API from '../../utils/API';


const DeleteModal = props => {
  //destructure props
  const { toggle, modal, deleteIngredientName, deleteIngredientId, getIngredients } = props

  const confirmDelete = (deleteIngredientId) => {
    API.deleteIngredient(deleteIngredientId)
      .then(getIngredients());
    toggle();
  }

    return (
      <div>
        <Modal isOpen={modal} fade={false} toggle={() => toggle("","")}>
          <ModalHeader toggle={() => toggle("", "")}>Delete {deleteIngredientName}</ModalHeader>
          <ModalBody>
            Are you sure you want to delete <strong>{deleteIngredientName}</strong>?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => confirmDelete(deleteIngredientId)}>Delete</Button>{' '}
            <Button color="primary" onClick={() => toggle("","")}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
}

export default DeleteModal;