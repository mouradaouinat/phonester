import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "./SearchBox";

const Logo = styled.div`
  font-family: "Maven Pro", sans-serif;
  font-weight: 900;
  font-size: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: #050024;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  margin-bottom: 200px;
`;

const NavElements = styled.ul`
  display: flex;
  width: auto;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0px;
    top: 8vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 92vh;
    background-color: #050024;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: all 0.3s ease;
  }
`;

const ListItems = styled.li`
  list-style: none;
  position: relative;
  margin-left: 10px;
`;

const RedBadge = styled.span`
  border-radius: 30px;
  color: #fff;
  font-size: 10px;
  background-color: #ff5656;
  border: none;
  padding: 0 3px;
  position: absolute;
  left: 45px;
  top: -3px;
`;

const Burger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const BurgerLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: cornsilk;
  margin: 4px;
  border-radius: 10px;
  transform-origin: 1px;
  transition: 0.4s all ease;

  :first-child {
    transform: ${({ open }) =>
      open ? "rotate(45deg)" : "rotate(0) translate(0, 0)"};
    transition: 0.4s all ease;
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transition: 0.4s all ease;
  }

  :nth-child(3) {
    transform: ${({ open }) =>
      open ? "rotate(-45deg)" : "rotate(0) translate(0, 0)"};
    transition: 0.4s all ease;
  }
`;

class Navbar extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    let open = this.state.open;
    open = !open;
    this.setState({ open });
  };

  render() {
    const { inCart, onSearch, searchQuery } = this.props;
    return (
      <Nav>
        <Logo>
          <Link to="/products">phonester</Link>
        </Logo>

        <NavElements open={this.state.open}>
          <ListItems>
            <Link to="/admin">Admin</Link>
          </ListItems>
          <ListItems>
            <SearchBox value={searchQuery} onChange={onSearch}></SearchBox>
          </ListItems>
          <ListItems>
            <Link to="/products">Products</Link>
          </ListItems>
          <ListItems>
            <Link to="/cart">
              Cart <i className="fa fa-shopping-cart"></i>
            </Link>
            {inCart.length !== 0 && <RedBadge>{inCart.length}</RedBadge>}
          </ListItems>
        </NavElements>
        <Burger onClick={this.handleToggle}>
          <BurgerLine open={this.state.open}></BurgerLine>
          <BurgerLine open={this.state.open}></BurgerLine>
          <BurgerLine open={this.state.open}></BurgerLine>
        </Burger>
      </Nav>
    );
  }
}

export default Navbar;
