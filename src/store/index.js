import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer from "../reducers/cart";
import productsReducer from "../reducers/products";
import logoReducer from "../reducers/logo";
import loginReducer from "../reducers/auth";
import thunk from "redux-thunk";

const reducers = combineReducers({
  inCart: cartReducer,
  products: productsReducer,
  logo: logoReducer,
  auth: loginReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  // applyMiddleware(thunk)
  // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancer(applyMiddleware(thunk))
);
