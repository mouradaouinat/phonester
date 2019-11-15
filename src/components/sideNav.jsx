import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navigation = styled.div`
  background-color: #c4c4c4;
  width: 15%;
  display: flex;
  flex-direction: column;
  height: 92vh;
  align-items: left;

  li {
    list-style: none;
    margin-top: 20px;
    padding: 20px 15px;
    text-align: left;

    :hover {
      background-color: #551ccf;

      a {
        color: white;
      }
    }
  }

  li a {
    color: #444;
  }
`;

const Span = styled.span`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SideNav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <NavLink to="/admin/home">
            <i className="fa fa-home"></i> <Span>Home</Span>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/admin/stock`}>
            <i className="fa fa-tags"></i> <Span>Products</Span>
          </NavLink>
        </li>
      </ul>
    </Navigation>
  );
};

export default SideNav;
