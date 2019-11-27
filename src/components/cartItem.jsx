import React from "react";
import styled from "styled-components";
import { Button } from "./productCard";
import { remove, increment, decrement } from "../actions";
import { useDispatch } from "react-redux";

const CheckoutProduct = styled.div`
  width: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.26);
  margin-bottom: 40px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }

  @media only screen and (max-width: 1024px) {
    margin: 20px auto;
  }
`;

const CheckoutProductImg = styled.div`
  display: inline-block;

  img {
    width: 100px;
  }
`;

const InlineP = styled.p`
  display: inline;
`;

const CheckoutProductInfo = styled.div`
  display: inline-block;

  p {
    margin-bottom: 20px;
  }
`;

const Badge = styled.span`
  background-color: #ffbd3e;
  border: 1px solid rgb(43, 43, 43);
  padding: 0 4px;
  border-radius: 3px;
  margin: 0 4px;
  color: rgb(27, 27, 27);
  font-weight: bold;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CheckoutProduct>
      <CheckoutProductImg>
        <img src={item.img} alt="Google Pixel - black" />
      </CheckoutProductImg>
      <CheckoutProductInfo>
        <p>{item.title}</p>
        <p>Price: ${item.price}</p>
        <InlineP>
          Quantity:<Badge>{item.count}</Badge>
        </InlineP>
        <Button plus onClick={() => dispatch(increment(item.id))}>
          +
        </Button>
        <Button minus onClick={() => dispatch(decrement(item.id))}>
          -
        </Button>
        <Button danger onClick={() => dispatch(remove(item.id))}>
          Remove
        </Button>
      </CheckoutProductInfo>
    </CheckoutProduct>
  );
};

export default CartItem;
