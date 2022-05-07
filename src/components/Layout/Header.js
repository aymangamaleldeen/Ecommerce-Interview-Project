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
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;
const Image = styled.header`
  width: 110%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;


function Header() {
  return (
    <Fragment>
      <HeaderWrapper >
        <h1> ACTUM Digital</h1>
        <HeaderCartButton/>
      </HeaderWrapper>

      <Image>
      </Image>
    </Fragment>
  );
}

export default Header;
