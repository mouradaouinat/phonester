export const add = id => {
  return {
    type: "ADD_TO_CART",
    payload: id
  };
};

export const remove = id => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id
  };
};

export const increment = id => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: id
  };
};

export const decrement = id => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: id
  };
};

export const clear = {
  type: "CLEAR_CART"
};

export const sort = ({ currentTarget: input }) => {
  return {
    type: "SORT_PRODUCTS",
    payload: input
  };
};

const search = {
  type: "SEARCH_PRODUCTS"
};
