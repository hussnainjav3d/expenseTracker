import React from 'react'
import Header from "./Header"

import Balance from "./Balance"
import IncomeExpense from "./IncomeExpense"
import TransactionList from "./TransactionList"
import TransactionForm from "./TransactionForm";

import "../App.css"
const ExpenseTracker = () => {
    return (
        <div className="container">
            <Header/>
            <Balance/>
            <IncomeExpense/>
            <TransactionList/>
            <TransactionForm/>
        </div>
    )
}

export default ExpenseTracker
