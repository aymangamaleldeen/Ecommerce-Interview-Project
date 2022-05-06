import React , {useContext} from 'react'
import CartItem from "./CartItem"
import styled from "styled-components";
import CartContext from '../../Store/CartContextProvider';

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
`;

const Cart = () => {
  const ctx = useContext(CartContext);
  return (
    <Container>
    {ctx.cartItems.map (item => <CartItem key={item.id}  item={item}/>)}
      </Container>
  )
}

export default Cart
