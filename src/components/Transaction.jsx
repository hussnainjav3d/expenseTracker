import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "";
  const border = transaction.amount < 0 ? "expense" : "income";
  return (
    <>
      <li className={border}>
        <span>{transaction.desc}</span>
        <span>
          {sign} ${Math.abs(transaction.amount)}
        </span>
        <button>x</button>
      </li>
    </>
  );
};

export default Transaction;
