import React from "react";
import styled from "styled-components";
import _ from "lodash";
import PropTypes from "prop-types";

const PaginationNav = styled.ul`
  margin-top: 10px;
  li {
    padding: 10px 14px;
    border: 1px solid grey;
    display: inline-block;
    list-style: none;
    cursor: pointer;

    &:hover {
      background-color: lightblue;
      color: white;
    }

    &:first-child {
      border-radius: 10px 0px 0px 10px;
    }

    &:last-child {
      border-radius: 0px 10px 10px 0px;
    }
  }
`;

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <PaginationNav>
      {pages.map(page => (
        <li key={page} onClick={() => onPageChange(page)}>
          {page}
        </li>
      ))}
    </PaginationNav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
