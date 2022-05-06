import React ,{useContext} from "react";
import styled from "styled-components";
import CartContext from "../../Store/CartContextProvider";

const Container = styled.li`
  flex: 1;
  list-style: none;

`;

const Wrapper = styled.div`
  margin: 30px 30px;

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
`;



const ProductItem = ({ product }) => {
  const ctx = useContext(CartContext);

  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={product.image.src} alt={product.image.alt} />
          <CartButton onClick={()=>ctx.addItem(product)}> ADD TO CART</CartButton>
        </ImageWrapper>
        <ParagraphContainer> {product.category}</ParagraphContainer>
        <ProductName>{product.name} </ProductName>
        <ParagraphContainer> {product.price}$ </ParagraphContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductItem;
