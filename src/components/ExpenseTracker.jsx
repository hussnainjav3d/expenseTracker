import React from "react";
import Header from "./Header";

import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import { TransactionProvider } from "../ContextApi";

import "../App.css";
const ExpenseTracker = () => {
  return (
    <div className="container">
      <TransactionProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <TransactionForm />
      </TransactionProvider>
    </div>
  );
};

export default ExpenseTracker;
