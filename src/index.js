import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ExpenseTracker from "./components/ExpenseTracker";
import store from "./store/Store";

ReactDOM.render(
  <Provider store={store}>
    <ExpenseTracker />
  </Provider>,

  document.getElementById("root")
);
