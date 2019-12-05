import { createStore, combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import productsReducer from "../reducers/products";
import logoReducer from "../reducers/logo";
import loginReducer from "../reducers/auth";

const reducers = combineReducers({
  inCart: cartReducer,
  products: productsReducer,
  logo: logoReducer,
  auth: loginReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
