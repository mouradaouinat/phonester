import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.div`
  background-color: #c4c4c4;
  width: 15%;
  display: flex;
  flex-direction: column;
  height: 92vh;

  li {
    list-style: none;
    margin-top: 40px;
    margin-left: 20px;
  }

  li a {
    color: #444;
  }
`;

const SideNav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/admin">
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to={`/admin/stock`}>
            <i className="fa fa-tags"></i> Manage Stock
          </Link>
        </li>
        <li>
          <Link to={`/admin/orders`}>
            <i className="fa fa-cart-arrow-down"></i> Orders
          </Link>
        </li>
        <li>
          <Link to={`/admin/add-new`}>
            <i className="fa fa-plus-circle"></i> Add new
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default SideNav;
