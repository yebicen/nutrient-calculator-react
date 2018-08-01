import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class DeleteModal extends React.Component {

  render() {
    //destructure props
    const {modal, toggleDeleteModal, deleteIngredient, deleteId, deleteIngredientName} = this.props
    return (
      <div>
        <Modal isOpen={modal} fade={false} toggle={() => toggleDeleteModal("","")}>
          <ModalHeader toggle={() => toggleDeleteModal("","")}>Delete {deleteIngredientName}</ModalHeader>
          <ModalBody>
            Are you sure you want to delete <strong>{deleteIngredientName}</strong>?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={()=> deleteIngredient(deleteId)}>Delete</Button>{' '}
            <Button color="primary" onClick={()=> toggleDeleteModal("","")}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}