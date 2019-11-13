import React from "react";
import styled from "styled-components";

const Search = styled.div`
  display: inline-block;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 20px;
  clear: both;
  margin-right: 8px;
  background: #ffffff;
  color: #888;
`;

const SearchInput = styled.input`
  border: none;
  font-size: 16px;
  display: inline;
  width: 100px;

  &:focus {
    outline: none;
  }
`;

const SearchBox = ({ onChange }) => {
  return (
    <Search>
      <i className="fa fa-search"></i>{" "}
      <SearchInput
        type="text"
        name="search"
        placeholder="Search"
        onChange={e => onChange(e.currentTarget.value)}
      />
    </Search>
  );
};

export default SearchBox;
