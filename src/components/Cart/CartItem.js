import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../Store/CartContextProvider";

const ListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;
  margin: 1rem 0;
  position: relative;
`;
const CancelButton = styled.button`
position:absolute;
top:0;
right:0;
font-size: 1.4rem;
cursor: pointer;
background: white;
font-weight: bold;
border: none;

`;
const ProductTitle = styled.h2`
  text-transform: capitalize;
  color: black;
`;
const Wrapper = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  color: #8a2b06;
  margin-right: 10px;
`;
const Quantity = styled.span`
  font-weight: bold;
  border: 1px solid #ccc;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  color: #363636;
  display: flex;
`;
const WrapperButtons = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;
const Button = styled.span`
  font: inherit;
  font-weight: bold;
  font-size: 1.25rem;
  color: #8a2b06;
  border: 1px solid #8a2b06;
  width: 3rem;
  text-align: center;
  border-radius: 6px;
  background-color: transparent;
  cursor: pointer;
  margin-left: 1rem;
  margin: 0.25rem;

  &:hover,
  &:active {
    background-color: #8a2b06;
    color: white;
  }
`;

const ImageWrapper = styled.div`
  width: 168px;
  height: 80%;

  border: 1px solid green;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const CartItem = ({ item }) => {
  const ctx = useContext(CartContext);
  const price = `$${item.price.toFixed(2)}`;

  return (
    <ListItem>
      <div>
        <CancelButton onClick={()=>ctx.deleteItems(item)}> x </CancelButton>
        <ProductTitle>{item.name}</ProductTitle>
        <Wrapper>
          <Price>{price}</Price>
          <Quantity>x{item.quantity}</Quantity>
          <WrapperButtons>
            <Button
              onClick={() => {
                ctx.addItem(item);
              }}
            >
              +
            </Button>
            <Button onClick={() => ctx.removeItem(item)}>−</Button>
          </WrapperButtons>
        </Wrapper>
      </div>
      <ImageWrapper>
        <Image src={item.image.src} alt={item.image.alt} />
      </ImageWrapper>
    </ListItem>
  );
};

export default CartItem;
