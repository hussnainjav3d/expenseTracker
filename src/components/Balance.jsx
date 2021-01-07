import React, { useContext } from "react";
import { TransactionContext } from "../ContextApi";

const Balance = () => {
  const transactions = useContext(TransactionContext);

  const totalBalance = transactions.reduce((accu, nextValue) => {
    return { amount: accu.amount + nextValue.amount };
  });

  return (
    <div className="balance">
      <h3>
        Balance
        <br />
        <span className="balance-amount">${totalBalance.amount}</span>
      </h3>
    </div>
  );
};

export default Balance;
