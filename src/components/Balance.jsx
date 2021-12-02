import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const transactions = useSelector((state) => state);
  console.log(transactions);
  // const { transactions } = useContext(TransactionContext);
  let total = 0;
  if (transactions.length === 0) {
    total = 0;
  } else {
    total = transactions
      .map((transaction) => transaction.amount)
      .reduce((accu, Val) => {
        return accu + Val;
      });
    // total = total;
  }
  const sign = total < 0 ? "-" : "";
  return (
    <div className="balance">
      <h3>
        Balance
        <br />
        <span className="balance-amount">
          {sign}${Math.abs(total)}
        </span>
      </h3>
    </div>
  );
};

export default Balance;
