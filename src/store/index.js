import { createStore, combineReducers } from "redux";
import cartReducer from "../reducers/cart";
import productsReducer from "../reducers/products";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  inCart: cartReducer,
  products: productsReducer,
  form: formReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
