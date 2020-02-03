import React from "react";
import "./statement-transaction.styles.css";
import TransactionModal from "../transaction-modal/transaction-modal.component";

class StatementTransaction extends React.Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = e => {
    e.stopPropagation();
    this.setState(() => ({ modalIsOpen: false }));
  };

  render() {
    const formatter = new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2
    });
    return (
      <div onClick={this.openModal} className='transaction'>
        <span className='name'>{this.props.transaction.name}</span>
        <span className='description'>
          {this.props.transaction.description}
        </span>
        {this.props.transaction.debit_credit === "credit" ? (
          <span className='amount'>
            + {formatter.format(this.props.transaction.amount)},-
          </span>
        ) : (
          <span className='amount'>
            - {formatter.format(this.props.transaction.amount)},-
          </span>
        )}
        <TransactionModal
          modalIsOpen={this.state.modalIsOpen}
          selectedTransaction={this.props.transaction}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
export default StatementTransaction;
