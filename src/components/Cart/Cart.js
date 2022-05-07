import React, { useContext } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import CartContext from "../../Store/CartContextProvider";

const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 443px;
  height: 279px;
  top: 109px;
  right: 10px;
  border: 4px solid #e4e4e4;
  background: #ffffff;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    width: 275px;
  }
`;

const Button = styled.button`
  width: 90%;
  height: 55px;
  margin-bottom: 10px;
  background: white;
  font-weight: 500;
  font-size: 23px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.07em;
  color: #000000;


  &:hover , &:active{
    background-color: #000000;
    color:white;
  }
`;

const Cart = ({ onHide }) => {
  const ctx = useContext(CartContext);

  const clickHandler = () => {
    ctx.clearItems();
    onHide();
  };
  return (
    <Container>
      {ctx.cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Button onClick={clickHandler}>CLEAR </Button>
    </Container>
  );
};

export default Cart;
