import React from "react";
import styled from "styled-components";

const FormControl = styled.div`
  margin-bottom: 10px;

  label {
    font-size: 20px;
    color: #333;
  }

  input {
    display: block;
    width: 500px;
    height: 30px;
    margin-top: 10px;
  }

  textarea {
    display: block;
    margin-top: 10px;
  }
`;

const ProductForm = ({ onSubmit }) => {
  return (
    <React.Fragment>
      <h1>Add New Product</h1>
      <form onSubmit={onSubmit}>
        <FormControl>
          <label>Product's Title</label>
          <input style={{ display: "block" }} type="text" name="title" />
        </FormControl>
        <FormControl>
          <label>Product's Price</label>
          <input type="text" name="price" />
        </FormControl>
        <FormControl>
          <label>Product's Company Name</label>
          <input type="text" name="company" />
        </FormControl>
        <FormControl>
          <label>Product Description</label>
          <textarea rows="6" cols="60"></textarea>
        </FormControl>
        <button type="submit">add new</button>
      </form>
    </React.Fragment>
  );
};

export default ProductForm;
