import React from "react";
import Modal from "react-modal";
import "./transaction-modal.styles.css";

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
      <button onClick={props.closeModal}>Close</button>
    </Modal>
  );
};

export default TransactionModal;
