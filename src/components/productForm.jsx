import React, { Component } from "react";
import styled from "styled-components";
import { saveProduct, getProduct } from "../data";
import Joi from "joi-browser";

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
    },
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.newProduct, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Product's Title"),
    price: Joi.number()
      .required()
      .label("Product's Price"),
    company: Joi.string()
      .required()
      .label("Product's Company Name"),
    info: Joi.string()
      .required()
      .label("Product Description"),
    id: Joi.string().allow(""),
    img: Joi.string().allow(""),
    count: Joi.number(),
    inCart: Joi.boolean(),
    total: Joi.number()
  };

  componentDidMount() {
    const productId = this.props.match.params.id;
    if (productId === "new") return;

    const product = getProduct(productId);
    if (!product) return this.props.history.replace("/not-found");

    this.setState({ newProduct: this.mapToViewModel(product) });
  }

  mapToViewModel(product) {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      company: product.company,
      info: product.info
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let newProduct = { ...this.state.newProduct };
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log(errors);
    if (errors) return;
    saveProduct(newProduct);
    this.props.history.push("/admin/stock");
  };

  handleChange = ({ currentTarget: input }) => {
    const newProduct = { ...this.state.newProduct };
    newProduct[input.name] = input.value;
    this.setState({ newProduct });
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <h1>
          {this.props.match.params.id === "new"
            ? "Add New Product"
            : "Edit Product"}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <FormControl>
            <label>Product's Title</label>
            <input
              onChange={this.handleChange}
              value={this.state.newProduct.title}
              type="text"
              name="title"
              error={errors.title}
            />
          </FormControl>
          <FormControl>
            <label>Product's Price</label>
            <input
              onChange={this.handleChange}
              value={this.state.newProduct.price}
              type="text"
              name="price"
              error={errors.price}
            />
          </FormControl>
          <FormControl>
            <label>Product's Company Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.newProduct.company}
              type="text"
              name="company"
              error={errors.company}
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
              error={errors.info}
            ></textarea>
          </FormControl>
          <SubmitButton type="submit">Save</SubmitButton>
        </form>
      </React.Fragment>
    );
  }
}

export default ProductForm;
