import React from "react";
import ProductCard from "./productCard";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 100px auto;

  @media only screen and (max-width: 768px) {
    max-width: 740px;
    margin-top: 70px;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 992px;
    margin: 80px auto;
  }
`;

const ProductsList = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  margin-top: 100px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const SortBy = styled.div`
  background-color: #ffbd3e;
  display: inline-block;
  border-radius: 60px;
  padding: 10px 20px;

  select {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;

const Products = ({ products, onAdd, onSort }) => {
  return (
    <Wrapper>
      <SortBy>
        Sort By{" "}
        <select onChange={onSort}>
          <option value="price">Price</option>
          <option value="title">Name</option>
        </select>
      </SortBy>
      <ProductsList>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
          ></ProductCard>
        ))}
      </ProductsList>
    </Wrapper>
  );
};

export default Products;
