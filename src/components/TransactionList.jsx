import React from "react";
import { useSelector } from "react-redux";
import Transaction from "./Transaction";

const TransactionList = () => {
  const transactions = useSelector((state) => state);
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
