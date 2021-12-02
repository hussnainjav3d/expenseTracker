import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../store/Action";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  const sign = transaction.amount < 0 ? "-" : "";
  const border = transaction.amount < 0 ? "expense" : "income";
  return (
    <>
      <li className={border}>
        <span>{transaction.desc}</span>
        <span>
          {sign} ${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => {
            console.log(transaction.id);
            dispatch(deleteTransaction(transaction.id));
          }}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
