import React from "react";
import CartItem from "./cartItem";
import Checkout from "./checkout";

const Cart = ({ cartItems, onRemove }) => {
  return (
    <div className="checkout container">
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={onRemove}></CartItem>
        ))}
      </div>
      <Checkout></Checkout>
    </div>
  );
};

export default Cart;
