import React, { Component } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.css";
import Navbar from "./components/navbar";
import Products from "./components/products";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./components/cart";
import ProductDetail from "./components/productDetails";
import Admin from "./components/admin";

class App extends Component {
  state = {
    logo: "phonester",
    logoColor: "#fff"
  };

  handleLogoChange = ({ currentTarget: input }) => {
    this.setState({ logo: input.value });
  };

  handleLogoColorChange = ({ currentTarget: input }) => {
    this.setState({ logoColor: input.value });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          onSearch={this.handleSearch}
          logo={this.state.logo}
          logoColor={this.state.logoColor}
        ></Navbar>
        <Switch>
          <Redirect exact from="/admin" to="/admin/home"></Redirect>
          <Route
            path="/admin/:topic"
            render={props => (
              <Admin
                {...props}
                products={this.state.products}
                onLogoChange={this.handleLogoChange}
                onLogoColorChange={this.handleLogoColorChange}
                logoColor={this.state.logoColor}
                logo={this.state.logo}
              ></Admin>
            )}
          ></Route>
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
          <Route exact path="/cart" component={Cart}></Route>
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
