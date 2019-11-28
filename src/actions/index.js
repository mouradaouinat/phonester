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

export const deleteFromDB = id => {
  return {
    type: "DELETE_PRODUCT",
    payload: id
  };
};

export const search = query => {
  return {
    type: "SEARCH_FOR_PRODUCT",
    payload: query
  };
};
