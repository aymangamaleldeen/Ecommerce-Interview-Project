import React from 'react'
import styled from "styled-components";



const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;

const List = styled.ul`
  width: 20%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-size: 1.5rem;
  border: 1px solid green;
`;
const LinkPage = styled.a`
text-decoration: none;
`;

const Pagination = ({ paginate}) => {
    const pageNumbers=[];
    for (let i = 1; i <= 4;  i++) {
        pageNumbers.push(i)
    }
  return <Navigation>
      <List>
          {pageNumbers.map(number => 
            <li key={number}>
                <LinkPage href='!#' onClick={()=>paginate(number)} > {number}</LinkPage>
            </li>)}
      </List>
  </Navigation>;
};

export default Pagination