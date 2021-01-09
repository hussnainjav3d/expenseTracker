import React, { useContext, useState } from "react";
import { TransactionContext } from "../ContextApi";

const TransactionForm = () => {
  let { addTransaction } = useContext(TransactionContext);
  const [newAmount, setAmount] = useState("");
  const [newDesc, setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (newAmount === "0") {
      return;
    } else {
      addTransaction({ amount: +newAmount, desc: newDesc, id: Date.now() });
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
      <input type="submit" value="Add Transaction" className="btn" />
    </form>
  );
};

export default TransactionForm;
