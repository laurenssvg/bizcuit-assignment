import React from "react";
import "./statement-transaction.styles.css";
import TransactionModal from "../transaction-modal/transaction-modal.component";

class StatementTransaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      selectedTransaction: undefined
    };
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
      selectedTransaction: this.props.transaction.name
    });
  };

  closeModal = e => {
    e.stopPropagation();
    this.setState(() => ({ modalIsOpen: false }));
  };

  render() {
    return (
      <div onClick={this.openModal} className='transaction'>
        <span className='name'>{this.props.transaction.name}</span>
        {this.props.transaction.debit_credit === "credit" ? (
          <span className='amount'>
            +{this.props.transaction.amount.toFixed(2)},-
          </span>
        ) : (
          <span className='amount'>
            -{this.props.transaction.amount.toFixed(2)},-
          </span>
        )}
        <TransactionModal
          modalIsOpen={this.state.modalIsOpen}
          selectedTransaction={this.state.selectedTransaction}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
export default StatementTransaction;
