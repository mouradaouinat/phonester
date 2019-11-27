import { getProducts } from "../data";
import _ from "lodash";
let products = getProducts();

const productsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SORT_PRODUCTS":
      products = _.sortBy(state, payload.value);
      return (state = products);
    default:
      return (state = products);
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
