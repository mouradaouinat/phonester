import React, { Component } from "react";

const Checkout = ({ cartItems, onClear }) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
  const tax = total * 0.2;
  const orderTotal = total + tax;
  return (
    <div className="checkout-card">
      <div className="in-between mb-2">
        <span>Total:</span>
        <span className="grey">${total}</span>
      </div>
      <div className="in-between mb-2">
        <span>Tax:</span>
        <span className="grey">${tax}</span>
      </div>
      <div className="in-between mb-2">
        <span>Order total:</span>
        <span className="grey">${orderTotal}</span>
      </div>
      <div className="in-between">
        <button className="btn-secondary">Checkout</button>
        <button className="btn-danger-outline" onClick={onClear}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;
