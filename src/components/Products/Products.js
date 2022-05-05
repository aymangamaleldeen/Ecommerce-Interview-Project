import React from "react"
import ProductItem from "./ProductItem"
import data from "../../data";
import styled from "styled-components";

const Container = styled.ul`
display:flex;
flex-wrap:wrap;
justify-content: space-between;
`;

const Products = () => {
  const { products } = data;
  return (
    <Container>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
