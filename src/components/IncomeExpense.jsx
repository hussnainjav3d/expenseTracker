import React, { useContext } from "react";
import { TransactionContext } from "../ContextApi";

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionContext);
  let income = 0;
  let expense = 0;
  if (transactions.length === 0) {
    income = 0;
    expense = 0;
  } else {
    const amount = transactions.map((transaction) => transaction.amount);
    income = amount.filter((n) => n > 0);
    if (income.length !== 0) {
      income = income.reduce((acc, val) => acc + val);
    } else {
      income = 0;
    }
    expense = amount.filter((n) => n < 0);
    if (expense.length !== 0) {
      expense = expense.reduce((acc, val) => acc + val) * -1;
    } else {
      expense = 0;
    }
  }

  return (
    <div className="income-expense">
      <div>
        Income
        <br />
        <span className="green">${income}</span>
      </div>
      <div>
        Expense
        <br />
        <span className="red">${expense}</span>
      </div>
    </div>
  );
};

export default IncomeExpense;
