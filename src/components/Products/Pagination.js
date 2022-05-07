import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;

const List = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  font-size: 1.5rem;

  @media (max-width: 735px) {
    width: 100%;
  }
`;
const LinkPage = styled.a`
  text-decoration: none;
  color: gray;

  &:hover {
    color: black;
  }
  &:focus {
    color: red;
  }
`;

const Pagination = ({
  totalProducts,
  productsPerPage,
  paginate,
  prevArrow,
  ForwardArrow,
  onPrevious,
  onForward,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil((totalProducts - 1) / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Navigation>
      <List>
        {prevArrow && (
          <ArrowBackIos
            onClick={() => onPrevious()}
            style={{ cursor: "pointer" }}
          />
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <LinkPage href="#!" onClick={() => paginate(number)}>
              {number}
            </LinkPage>
          </li>
        ))}
        {ForwardArrow && (
          <ArrowForwardIos
            onClick={() => onForward()}
            style={{ cursor: "pointer" }}
          />
        )}
      </List>
    </Navigation>
  );
};

export default Pagination;
