import React from "react";
import CartItem from "./cartItem";
import Checkout from "./checkout";
import { Wrapper } from "./products";
import styled from "styled-components";

const CheckoutPage = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: auto;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
  }
`;

const Cart = ({ cartItems, onRemove, onIncrement, onDecrement, onClear }) => {
  return (
    <Wrapper>
      <CheckoutPage>
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            ></CartItem>
          ))}
        </div>
        <Checkout cartItems={cartItems} onClear={onClear}></Checkout>
      </CheckoutPage>
    </Wrapper>
  );
};

export default Cart;
