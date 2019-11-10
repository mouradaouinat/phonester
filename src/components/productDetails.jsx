import React from "react";
import { Link } from "react-router-dom";

const ProductDetail = ({ products, match, onAdd }) => {
  const product = products.find(
    product => product.id === parseInt(match.params.id)
  );
  return (
    <div className="product-page container">
      <div className="product-image-big">
        <img src={product.img} alt="google pixel black" />
      </div>
      <div className="product-description">
        <h1 className="mb-1">{product.title}</h1>
        <h2 className="mb-1">Price: ${product.price}</h2>
        <h2 className="mb-1">Description:</h2>
        <p className="mb-4">{product.info}</p>
        <button
          className="btn"
          onClick={() => onAdd(product.id)}
          disabled={product.inCart}
        >
          {product.inCart ? "Added " : "Add to Cart "}{" "}
          <i className="fa fa-shopping-cart"></i>
        </button>
        <button className="btn-outline">
          <Link to="/products" style={{ color: "#ffbd3e" }}>
            Continue shopping
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
