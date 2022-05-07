import React , {useContext} from "react";
import data from "../../data";
import styled from "styled-components";
import CartContext from "../../Store/CartContextProvider";

const Container = styled.div`
margin-top: 6rem;
width: 97%;
border:3px solid maroon;

`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
`;
const AddTOCartButton = styled.button`
  width: 200px;
  height: 70px;
  color: white;
  background: black;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover,
  &:active {
    color: black;
    background: white;
  }
`;
const Title = styled.h2``;

const ImageWrapper = styled.div`
  max-width: 1290px;
  height: 553px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  object-fit: cover;

`;
const FeaturedFlag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 3%;
  background-color: white;
  color: black;
  font-size: 2rem;
`;

const FeaturedProduct = () => {
  const { products } = data;
  const featuredproduct = products[24];
  const ctx = useContext(CartContext);

  return (
    <Container>
      <TitleWrapper>
        <Title> {featuredproduct.name}</Title>
        <AddTOCartButton onClick={()=>ctx.addItem(featuredproduct)}> ADD TO CART</AddTOCartButton>
      </TitleWrapper>
      <ImageWrapper>
        <Image
          src={featuredproduct.image.src}
          alt={featuredproduct.image.alt}
        />
    <FeaturedFlag> Featured </FeaturedFlag>
      </ImageWrapper>
    </Container>
  );
};

export default FeaturedProduct;
