import { createStore } from "redux";
import { TransactionReducer } from "./Transactionreducer";

const store = createStore(TransactionReducer);

export default store;
