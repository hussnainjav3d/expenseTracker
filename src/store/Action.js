export const add = "ADD";
export const deleteT = "delete";

export const addTransaction = ({ amount, desc, id }) => ({
  type: add,
  payload: {
    amount,
    desc,
    id,
  },
});

export const deleteTransaction = (id) => ({
  type: deleteT,
  payload: id,
});
