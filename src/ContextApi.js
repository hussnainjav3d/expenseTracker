import { createContext, useReducer } from "react";
import { TransactionReducer } from "./TransactionReducer";

const initTransactions = [
  // { id: 1, desc: "Cash", amount: 250 },
  // { id: 2, desc: "Mobile Load", amount: -20 },
  // { id: 3, desc: "Salary", amount: 2000 },
  // { id: 4, desc: "Load", amount: -200 },
];

export const TransactionContext = createContext(initTransactions);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initTransactions);
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transaction.amount,
        desc: transaction.desc,
        id: transaction.id,
      },
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  return (
    <TransactionContext.Provider
      value={{ transactions: state, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
