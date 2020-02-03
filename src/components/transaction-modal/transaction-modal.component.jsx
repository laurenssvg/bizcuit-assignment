import React from "react";
import Modal from "react-modal";
import "./transaction-modal.styles.css";
import { Button } from "@material-ui/core";

const TransactionModal = props => {
  return (
    <Modal
      className='modal'
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel='selectedTransaction'
      closeTimeoutMS={200}
    >
      <h3>{props.selectedTransaction}</h3>
      <Button variant='outlined' onClick={props.closeModal}>
        Close
      </Button>
    </Modal>
  );
};

Modal.setAppElement("body");

export default TransactionModal;
