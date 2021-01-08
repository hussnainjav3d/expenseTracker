import React, { useContext } from "react";
import { TransactionContext } from "../ContextApi";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <>
      History
      <hr />
      <ul className="transaction-list">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
