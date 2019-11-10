import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ inCart }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="inner container">
          <div className="logo">
            <Link to="/products">phonester</Link>
          </div>
          <div className="navbar-elements">
            <div className="search">
              <input
                type="text"
                name="search"
                className="search-input"
                placeholder="Search"
              />
              <button className="search-button">
                <i className="fa fa-search"></i>
              </button>
            </div>
            <ul className="products-nav">
              <li className="link-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="link-item">
                <Link to="/cart">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
                <span className="badge">{inCart.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
