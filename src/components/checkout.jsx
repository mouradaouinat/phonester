import React, { Component } from "react";

class Checkout extends Component {
  state = {
    total: 0
  };

  render() {
    return (
      <div className="checkout-card">
        <div className="in-between mb-2">
          <span>Total:</span>
          <span className="grey">$200</span>
        </div>
        <div className="in-between mb-2">
          <span>Tax:</span>
          <span className="grey">$20</span>
        </div>
        <div className="in-between mb-2">
          <span>Order total:</span>
          <span className="grey">$220</span>
        </div>
        <div className="in-between">
          <button className="btn-secondary">Checkout</button>
          <button className="btn-danger-outline">Clear Cart</button>
        </div>
      </div>
    );
  }
}

export default Checkout;
