import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.css";
import Navbar from "./components/navbar";
import Products from "./components/products";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./components/cart";
import ProductDetail from "./components/productDetails";
import Admin from "./components/admin";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Redirect exact from="/admin" to="/admin/home"></Redirect>
        <Route path="/admin/:topic" component={Admin}></Route>
        <Redirect exact from="/" to="/products" />
        <Route path="/products" component={Products}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/:id" component={ProductDetail}></Route>
      </Switch>
    </div>
  );
}

export default App;
