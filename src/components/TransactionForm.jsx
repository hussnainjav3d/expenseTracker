import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTransaction } from "../store/Action";

const TransactionForm = () => {
  const dispatch = useDispatch();
  const [newAmount, setAmount] = useState("");
  const [newDesc, setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (newAmount === "0") {
      return;
    } else {
      dispatch(
        addTransaction({ amount: +newAmount, desc: newDesc, id: Date.now() })
      );
    }
    setAmount("");
    setDesc("");
  };

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <label htmlFor="details">Transaction Details</label>
      <br />
      <input
        type="text"
        id="details"
        placeholder="Enter details"
        value={newDesc}
        required
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <label htmlFor="amount">
        Enter Amount <br /> (Positive - Income) (Negative - Expense)
      </label>
      <br />
      <input
        type="number"
        id="amount"
        placeholder="Enter details"
        value={newAmount}
        required
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        data-opix-event="addTransaction"
        type="submit"
        value="Add Transaction"
        className="btn"
      />
    </form>
  );
};

export default TransactionForm;
