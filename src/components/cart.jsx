import React from "react";
import CartItem from "./cartItem";
import Checkout from "./checkout";

const Cart = ({ cartItems, onRemove, onIncrement, onDecrement, onClear }) => {
  return (
    <div className="checkout container">
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
    </div>
  );
};

export default Cart;
