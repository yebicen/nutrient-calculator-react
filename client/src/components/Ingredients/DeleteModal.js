import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = props => {
    return (
      <div>
        <Modal isOpen={props.modal} fade={false} toggle={props.toggle}>
          <ModalHeader toggle={this.toggle}>Delete {props.deleteIngredientName}</ModalHeader>
          <ModalBody>
            Are you sure you want to delete <strong>{props.deleteIngredientName}</strong>?
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Delete</Button>{' '}
            <Button color="secondary" onClick={()=>props.toggle("","")}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

export default DeleteModal;