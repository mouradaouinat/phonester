import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { search } from "../actions";

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
  display: inline-block;
  width: 100px;

  &:focus {
    outline: none;
  }
`;

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function handleChange(query) {
    setQuery(query);
    dispatch(search(query));
  }

  return (
    <Search>
      <i className="fa fa-search"></i>{" "}
      <SearchInput
        type="text"
        name="search"
        placeholder="Search"
        value={query}
        onChange={e => handleChange(e.currentTarget.value)}
      />
    </Search>
  );
};

export default SearchBox;
