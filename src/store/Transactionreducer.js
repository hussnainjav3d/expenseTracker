import { add, deleteT } from "./Action";

const transactions = [];

export const TransactionReducer = (state = transactions, action) => {
  switch (action.type) {
    case add:
      return [action.payload, ...state];
    case deleteT:
      return [
        ...state.filter((transaction) => transaction.id === action.payload),
      ];
    default:
      return state;
  }
};
