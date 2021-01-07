import { createContext } from "react";

const initTransactions = [
  { id: 1, desc: "Cash", amount: 250 },
  { id: 2, desc: "Mobile Load", amount: -20 },
  { id: 3, desc: "Salary", amount: 2000 },
  { id: 4, desc: "Load", amount: -20 },
];

export const TransactionContext = createContext(initTransactions);
