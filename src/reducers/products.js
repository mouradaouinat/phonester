import { getProducts, deleteProduct } from "../data";
let products = getProducts();

const productsReducer = (state = products, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return [...state];
    case "REMOVE_FROM_CART":
      return [...state];
    case "SORT_PRODUCTS":
      return [...state];
    case "DELETE_PRODUCT":
      const filtered = state.filter(product => product.id !== payload);
      deleteProduct(payload);
      return [...filtered];
    case "SEARCH_FOR_PRODUCT":
      let currentList = [];
      let newList = [];
      if (payload !== "") {
        currentList = [...state];
        newList = currentList.filter(item => {
          const regex = new RegExp(payload, "ig");
          return item.title.match(regex) || item.company.match(regex);
        });
      } else {
        newList = getProducts();
      }
      return (state = [...newList]);
    default:
      return [...state];
  }
};

export default productsReducer;
