import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../Store/CartContextProvider";

const Container = styled.li`
  flex: 1;
  list-style: none;
`;

const Wrapper = styled.div`
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 282px;
  height: 398px;

  &:hover button {
    opacity: 1;
    bottom: 0px;
  }
`;
const BestSellerFlag = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:120px;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: white;
  color: black;

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const ParagraphContainer = styled.p`
  margin: 0;
  font-size: 1.4rem;
  text-transform: capitalize;
`;
const ProductName = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  text-transform: capitalize;
`;
const CartButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  height: 70px;
  color: white;
  background: black;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  transition: 0.25s;

  &:hover,
  &:active {
    color: black;
    background: white;
  }
`;

const ProductItem = ({ product }) => {
  const ctx = useContext(CartContext);

const clickHandler = ()=>{
  ctx.addItem(product);
  
}


  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={product.image.src} alt={product.image.alt} />
          {product.bestseller? <BestSellerFlag> Best Seller</BestSellerFlag>:""}
          <CartButton onClick={clickHandler}>
            ADD TO CART
          </CartButton>
        </ImageWrapper>
        <ParagraphContainer> {product.category}</ParagraphContainer>
        <ProductName>{product.name} </ProductName>
        <ParagraphContainer> {product.price}$ </ParagraphContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductItem;
