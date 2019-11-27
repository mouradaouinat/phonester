import { getProducts } from "../data";
let products = getProducts();

const cartReducer = (state = [], { type, payload }) => {
  const product = products.find(product => product.id === payload);
  const productInCart = state.find(product => product.id === payload);
  let inCart = [...state];
  switch (type) {
    case "ADD_TO_CART":
      product.inCart = true;
      product.count += 1;
      inCart = products.filter(product => product.inCart === true);
      return (state = inCart);
    case "REMOVE_FROM_CART":
      product.inCart = false;
      product.count = 0;
      inCart = products.filter(product => product.inCart === true);
      return (state = inCart);
    case "INCREMENT_QUANTITY":
      productInCart.count += 1;
      return (state = inCart);
    case "DECREMENT_QUANTITY":
      if (productInCart.count === 1) {
        productInCart.inCart = false;
        productInCart.count = 0;
        inCart = products.filter(product => product.inCart === true);
        return (state = inCart);
      } else {
        productInCart.count -= 1;
        return (state = inCart);
      }
    case "CLEAR_CART":
      inCart.map(product => {
        product.inCart = false;
        product.count = 0;
      });
      return (state = []);
    default:
      return state;
  }
};

export default cartReducer;
