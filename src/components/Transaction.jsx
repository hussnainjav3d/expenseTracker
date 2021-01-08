import React, { useContext } from "react";
import { TransactionContext } from "../ContextApi";
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(TransactionContext);

  const sign = transaction.amount < 0 ? "-" : "";
  const border = transaction.amount < 0 ? "expense" : "income";
  return (
    <>
      <li className={border}>
        <span>{transaction.desc}</span>
        <span>
          {sign} ${Math.abs(transaction.amount)}
        </span>
        <button onClick={(e) => deleteTransaction(transaction.id)}>x</button>
      </li>
    </>
  );
};

export default Transaction;
