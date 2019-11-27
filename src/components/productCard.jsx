import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../actions";

const Card = styled.div`
  text-align: center;
  padding: 20px;
  width: 320px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.26);
  margin-bottom: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 1024px) {
    width: 300px;
  }

  @media only screen and (max-width: 600px) {
    margin: 20px auto;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 300;
`;

const CardImage = styled.div`
  img {
    width: 250px;
    margin-bottom: 10px;
  }
`;

const ProductPrice = styled.h3`
  margin-bottom: 10px;
  font-weight: 300;
`;

export const Button = styled.button`
  border: 2px solid #ffbd3e;
  background-color: #ffbd3e;
  padding: 8px 40px;
  border-radius: 50px;
  cursor: pointer;

  ${props =>
    props.secondary &&
    css`
      border: 2px solid #050024;
      background-color: #050024;
      color: #ffffff;
      @media only screen and (max-width: 600px) {
        padding: 8px 20px;
      }
    `};

  ${props =>
    props.danger &&
    css`
      border: 2px solid #ff7b7b;
      background-color: #ff7b7b;
      padding: 0 10px;
      border-radius: 50px;
      cursor: pointer;
      color: #ffffff;
      font-size: 14px;
      display: inline-block;
    `};

  ${props =>
    props.dangerOutline &&
    css`
      border: 2px solid #ff7b7b;
      color: #ff7b7b;
      background-color: transparent;
      padding: 8px 40px;
      border-radius: 50px;
      cursor: pointer;
      @media only screen and (max-width: 600px) {
        padding: 8px 20px;
      }
    `};

  ${props =>
    props.outline &&
    css`
      border: 2px solid #ffbd3e;
      background-color: transparent;
      padding: 8px 20px;
      border-radius: 50px;
      color: #ffbd3e;
      cursor: pointer;
    `};

  ${props =>
    props.plus &&
    css`
      border: 1px solid black;
      border-radius: 40px;
      padding: 1px 5px;
      background: transparent;
      cursor: pointer;
      margin-right: 10px;
    `};

  ${props =>
    props.minus &&
    css`
      border: 1px solid black;
      border-radius: 40px;
      padding: 2px 7px;
      background: transparent;
      cursor: pointer;
      margin-right: 10px;
    `};
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardTitle>{product.title}</CardTitle>
      <CardImage>
        <Link to={`/${product.id}`}>
          <img src={product.img} alt="" />
        </Link>
      </CardImage>
      <ProductPrice>Price: ${product.price}</ProductPrice>
      <Button
        onClick={() => dispatch(add(product.id))}
        disabled={product.inCart}
      >
        {product.inCart ? "Added " : "Add to Cart "}
        <i className="fa fa-shopping-cart"></i>
      </Button>
    </Card>
  );
};

export default ProductCard;
