import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;


function Header() {
  return (
    <Fragment>
      <HeaderWrapper >
        <h1> ACTUM Digital</h1>
        <HeaderCartButton/>
      </HeaderWrapper>
    </Fragment>
  );
}

export default Header;
