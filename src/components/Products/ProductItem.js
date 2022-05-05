import React from "react";
import styled from "styled-components";

const Container = styled.li`

`;

const Image = styled.img`
  width: 282px;
  height: 398px;
`;

const ProductItem = ({ product }) => {
  return (
    <Container>
      <div>
        <h3>{product.name} </h3>
        <Image src={product.image.src} alt={product.image.alt} />
      </div>
    </Container>
  );
};

export default ProductItem;
