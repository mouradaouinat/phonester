import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <div className="product-image">
        <Link to={`/${product.id}`}>
          <img src={product.img} alt="" />
        </Link>
      </div>
      <h3 className="product-price">Price: ${product.price}</h3>
      <button
        className="btn"
        onClick={() => onAdd(product.id)}
        disabled={product.inCart}
      >
        {product.inCart ? "Added " : "Add to Cart "}
        <i className="fa fa-shopping-cart"></i>
      </button>
    </div>
  );
};

export default ProductCard;
