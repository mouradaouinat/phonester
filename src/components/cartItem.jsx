import React from "react";

const CartItem = ({ item, onRemove, onIncrement, onDecrement }) => {
  return (
    <div className="checkout-product mb-2">
      <div className="chechout-product-img">
        <img src={item.img} alt="Google Pixel - black" />
      </div>
      <div className="chechout-product-info">
        <p className="mb-micro">{item.title}</p>
        <p className="mb-micro">Price: ${item.price}</p>
        <p className="mb-micro inline">
          Quantity:<span className="badge mr-micro">{item.count}</span>
        </p>
        <button className="btn-plus" onClick={() => onIncrement(item.id)}>
          +
        </button>
        <button
          className="btn-minus mr-micro mb-micro"
          onClick={() => onDecrement(item.id)}
        >
          -
        </button>
        <button className="btn-danger" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
