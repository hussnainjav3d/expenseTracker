import React from "react";

const TransactionForm = () => {
  return (
    <form className="form-control">
      <label htmlFor="details">Transaction Details</label>
      <br />
      <input type="text" id="details" placeholder="Enter details" required />
      <br />
      <label htmlFor="amount">
        Enter Amount <br /> (Positive - Income) (Negative - Expense)
      </label>
      <br />
      <input type="number" id="amount" placeholder="Enter details" required />
      <input type="submit" value="Add Transaction" className="btn" />
    </form>
  );
};

export default TransactionForm;
