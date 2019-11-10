import React from "react";
import ProductCard from "./productCard";

const Products = ({ products, onAdd }) => {
  return (
    <div className="products-list container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        ></ProductCard>
      ))}
    </div>
  );
};

export default Products;
