import { getProducts } from "../data";
import _ from "lodash";
let products = getProducts();

const productsReducer = (state = products, { type }) => {
  switch (type) {
    case "ADD_TO_CART":
      return [...state];
    case "REMOVE_FROM_CART":
      return [...state];
    case "SORT_PRODUCTS":
      return [...state];
    default:
      return state;
  }
};

export default productsReducer;

// handleSearch = query => {
//   let currentList = [];
//   let newList = [];
//   if (query !== "") {
//     currentList = this.state.products;
//     newList = currentList.filter(item => {
//       const regex = new RegExp(query, "ig");
//       return item.title.match(regex) || item.company.match(regex);
//     });
//   } else {
//     newList = getProducts();
//   }
//   this.setState({
//     products: newList
//   });
// };
