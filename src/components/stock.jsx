import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { deleteFromDB } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;

  tr,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: #551ccf;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  float: right;

  ${props =>
    props.danger &&
    css`
      border: 2px solid #ff1919;
      background-color: #ff1919;
      color: #ffffff;
      float: none;
      font-size: 14px;
      padding: 8px 16px;
    `};

  ${props =>
    props.edit &&
    css`
      border: 2px solid #808080;
      background-color: #808080;
      color: #ffffff;
      float: none;
      font-size: 14px;
      padding: 8px 16px;
    `};
`;

const Stock = () => {
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const products = paginate(allProducts, currentPage, pageSize);
  return (
    <React.Fragment>
      <h1>Products</h1>
      <Button>
        <Link to="/admin/new">
          <i className="fa fa-plus-circle"></i> Add New
        </Link>
      </Button>
      <div style={{ overflowX: "scroll" }}>
        <ProductsTable>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Company</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={"/" + product.img} alt={product.title} width="80" />
                </td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.company}</td>
                <td>{product.info.substring(0, 30)}...</td>
                <td>
                  <Button edit>
                    <Link to={`/admin/${product.id}`}>
                      Edit <i className="fa fa-edit"></i>
                    </Link>
                  </Button>
                </td>
                <td>
                  <Button
                    danger
                    onClick={() => dispatch(deleteFromDB(product.id))}
                  >
                    Delete <i className="fa fa-trash" aria-hidden="true"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductsTable>
      </div>
      <Pagination
        itemsCount={allProducts.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      ></Pagination>
    </React.Fragment>
  );
};

export default Stock;
