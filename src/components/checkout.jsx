import React from "react";
import { Button } from "./productCard";
import styled, { css } from "styled-components";
import { clear } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const CheckoutCard = styled.div`
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.26);
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    width: auto;
  }

  @media only screen and (max-width: 768px) {
    margin: 20px auto;
  }
`;

const Splitter = styled.div`
  display: flex;
  justify-content: space-between;

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: 40px;
    `};
`;

const Grey = styled.span`
  color: #777;
`;

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.inCart);

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
  const tax = (total * 0.2).toFixed(2);
  const orderTotal = total + parseFloat(tax);

  return (
    <CheckoutCard>
      <Splitter marginBottom>
        <span>Total:</span>
        <Grey>${total.toFixed(2)}</Grey>
      </Splitter>
      <Splitter marginBottom>
        <span>Tax:</span>
        <Grey>${tax}</Grey>
      </Splitter>
      <Splitter marginBottom>
        <span>Order total:</span>
        <Grey>${orderTotal.toFixed(2)}</Grey>
      </Splitter>
      <Splitter>
        <Button secondary>Checkout</Button>
        <Button dangerOutline onClick={dispatch(clear)}>
          Clear Cart
        </Button>
      </Splitter>
    </CheckoutCard>
  );
};

export default Checkout;
