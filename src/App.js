import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/navbar";
import Products from "./components/products";
import { storeProducts } from "./data";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/cart";
import ProductDetail from "./components/productDetails";

class App extends Component {
  state = {
    products: [],
    inCart: []
  };

  componentDidMount() {
    const products = storeProducts;
    this.setState({ products });
  }

  handleAdd = id => {
    const product = this.state.products.find(product => product.id === id);
    product.inCart = true;
    product.count += 1;
    let inCart = [...this.state.inCart];
    inCart = this.state.products.filter(product => product.inCart === true);
    this.setState({ inCart });
  };

  handleRemove = id => {
    const product = this.state.products.find(product => product.id === id);
    product.inCart = false;
    product.count = 0;
    let inCart = [...this.state.inCart];
    inCart = this.state.products.filter(product => product.inCart === true);
    this.setState({ inCart });
  };

  render() {
    return (
      <div className="App">
        <Navbar inCart={this.state.inCart}></Navbar>
        <Switch>
          <Route
            path="/products"
            render={props => (
              <Products
                {...props}
                products={this.state.products}
                onAdd={this.handleAdd}
              ></Products>
            )}
          ></Route>
          <Route
            exact
            path="/cart"
            render={props => (
              <Cart
                {...props}
                cartItems={this.state.inCart}
                onRemove={this.handleRemove}
              ></Cart>
            )}
          ></Route>
          <Route
            path="/:id"
            render={props => (
              <ProductDetail
                {...props}
                products={this.state.products}
                onAdd={this.handleAdd}
              ></ProductDetail>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
