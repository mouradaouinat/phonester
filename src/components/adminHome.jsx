import React from "react";
import styled from "styled-components";

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

const AdminHome = ({ onLogoChange, logo, onLogoColorChange, logoColor }) => {
  return (
    <React.Fragment>
      <Heading>Home</Heading>
      <Lead>
        Welcome to your Dashboard you can start by changing the name of your
        site here
      </Lead>
      <label>Logo: </label>
      <input type="text" onChange={onLogoChange} value={logo} />
      <input
        type="color"
        id="head"
        name="head"
        value={logoColor}
        onChange={onLogoColorChange}
      />
    </React.Fragment>
  );
};

export default AdminHome;
