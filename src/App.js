import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/navbar";
import Products from "./components/products";
import { storeProducts } from "./data";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./components/cart";
import ProductDetail from "./components/productDetails";
import _ from "lodash";
import uuid from "uuid";
import Admin from "./components/admin";

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

  handleIncrement = id => {
    const product = this.state.inCart.find(product => product.id === id);
    product.count += 1;
    let inCart = [...this.state.inCart];
    this.setState({ inCart });
  };

  handleDecrement = id => {
    const product = this.state.inCart.find(product => product.id === id);
    if (product.count === 1) {
      product.inCart = false;
      product.count = 0;
      let inCart = [...this.state.inCart];
      inCart = this.state.products.filter(product => product.inCart === true);
      this.setState({ inCart });
    } else {
      product.count -= 1;
      let inCart = [...this.state.inCart];
      this.setState({ inCart });
    }
  };

  handleClear = () => {
    let inCart = [...this.state.inCart];
    inCart.map(product => this.handleRemove(product.id));
    inCart = [];
    this.setState({ inCart });
  };

  handleSort = e => {
    const products = _.sortBy(this.state.products, e.currentTarget.value);
    this.setState({ products });
  };

  handleSearch = query => {
    let currentList = [];
    let newList = [];
    if (query !== "") {
      currentList = this.state.products;
      newList = currentList.filter(item => {
        const lc = item.title.toLowerCase();
        const filter = query.toLowerCase();
        return lc.startsWith(filter);
      });
    } else {
      newList = storeProducts;
    }
    this.setState({
      products: newList
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newProduct = {
      id: "",
      title: "",
      img: "",
      price: 0,
      company: "",
      info: "",
      inCart: false,
      count: 0,
      total: 0
    };
    newProduct.title = e.target.title.value;
    newProduct.price = e.target.price.value;
    newProduct.info = e.target.info.value;
    newProduct.id = uuid();
    newProduct.img = "img/new-product.jpg";
    let products = [...this.state.products, newProduct];
    this.setState({ products });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          inCart={this.state.inCart}
          onSearch={this.handleSearch}
        ></Navbar>
        <Switch>
          <Route
            path="/admin"
            render={props => (
              <Admin {...props} onSubmit={this.handleSubmit}></Admin>
            )}
          ></Route>
          <Route path="/admin/:topic" component={Admin}></Route>
          <Redirect exact from="/" to="/products" />
          <Route
            path="/products"
            render={props => (
              <Products
                {...props}
                products={this.state.products}
                onAdd={this.handleAdd}
                onSort={this.handleSort}
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
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onClear={this.handleClear}
              ></Cart>
            )}
          ></Route>
          <Route
            exact
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
