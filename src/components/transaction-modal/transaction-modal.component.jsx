import React from "react";
import Modal from "react-modal";
import "./transaction-modal.styles.css";
import { Button } from "@material-ui/core";

const TransactionModal = props => {
  const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });
  const selectedTransaction = props.selectedTransaction;
  return (
    <Modal
      className='modal'
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel='selectedTransaction'
      closeTimeoutMS={200}
    >
      <div>
        <h2>{selectedTransaction.date}</h2>
        <h3>{selectedTransaction.name}</h3>
        <p>{selectedTransaction.description}</p>
        {selectedTransaction.debit_credit === "credit" ? (
          <p className='amount-modal'>
            + {formatter.format(selectedTransaction.amount)}
          </p>
        ) : (
          <p className='amount-modal'>
            - {formatter.format(selectedTransaction.amount)}
          </p>
        )}
      </div>
      <Button variant='outlined' onClick={props.closeModal}>
        Close
      </Button>
    </Modal>
  );
};

Modal.setAppElement("body");

export default TransactionModal;
