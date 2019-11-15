import React, { Component } from "react";
import styled from "styled-components";
import { saveProduct } from "../data";
import uuid from "uuid";

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

    @media only screen and (max-width: 768px) {
      width: 250px;
    }
  }

  textarea {
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
      width: 250px;
    }
  }
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  background-color: #551ccf;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

class ProductForm extends Component {
  state = {
    newProduct: {
      id: "",
      title: "",
      img: "",
      price: "",
      company: "",
      info: "",
      inCart: false,
      count: 0,
      total: 0
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let newProduct = { ...this.state.newProduct };
    newProduct.id = uuid();
    newProduct.img = "img/new-product.jpg";
    saveProduct(newProduct);
    this.props.history.push("/");
  };

  handleChange = ({ currentTarget: input }) => {
    const newProduct = { ...this.state.newProduct };
    newProduct[input.name] = input.value;
    this.setState({ newProduct });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add New Product</h1>
        <form onSubmit={this.handleSubmit}>
          <FormControl>
            <label>Product's Title</label>
            <input
              onChange={this.handleChange}
              value={this.state.newProduct.title}
              type="text"
              name="title"
            />
          </FormControl>
          <FormControl>
            <label>Product's Price</label>
            <input
              onChange={this.handleChange}
              value={this.state.newProduct.price}
              type="text"
              name="price"
            />
          </FormControl>
          <FormControl>
            <label>Product's Company Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.newProduct.company}
              type="text"
              name="company"
            />
          </FormControl>
          <FormControl>
            <label>Product Description</label>
            <textarea
              value={this.state.newProduct.info}
              onChange={this.handleChange}
              rows="6"
              cols="54"
              name="info"
            ></textarea>
          </FormControl>
          <SubmitButton type="submit">
            <i className="fa fa-plus-circle"></i> Add New
          </SubmitButton>
        </form>
      </React.Fragment>
    );
  }
}

export default ProductForm;
