import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logoNameChange, logoColorChange } from "../actions";

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 300;
  color: #666;
  margin-bottom: 30px;
`;

const Lead = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const AdminHome = () => {
  // const logo = useSelector(state => state.logo);
  const dispatch = useDispatch();
  const [logoName, setLogoName] = useState("phonester");
  const [logoColor, setLogoColor] = useState("#ffffff");

  function logoChange({ currentTarget: input }) {
    setLogoName(input.value);
    dispatch(logoNameChange(logoName));
  }

  function colorChange({ currentTarget: input }) {
    setLogoColor(input.value);
    dispatch(logoColorChange(input.value));
  }

  return (
    <React.Fragment>
      <Heading>Home</Heading>
      <Lead>
        Welcome to your Dashboard you can start by changing the name of your
        site here
      </Lead>
      <label>Logo: </label>
      <input type="text" onChange={logoChange} value={logoName} />
      <input
        type="color"
        id="head"
        name="head"
        value={logoColor}
        onChange={colorChange}
      />
    </React.Fragment>
  );
};

export default AdminHome;
