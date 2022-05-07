import { useContext, useState } from "react";
import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContextProvider";
import styled from "styled-components";

const Container = styled.div`
  /* position: relative; */
`;

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  &:hover,
  &:active {
    background-color: #2c0d00;
  }
`;
const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #92320c;
  }
`;
const CartWrapper = styled.div``;

const HeaderCartButton = () => {
  const [showCart, setShowCart] = useState(false);

  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.cartItems.length;

  const clickHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <Container>
      <Button onClick={clickHandler}>
        <Icon>
          <CartIcon />
        </Icon>
        <Badge> {numberOfCartItems} </Badge>
      </Button>
      <CartWrapper>
        {showCart && <Cart onHide={() => setShowCart(!showCart)} />}
      </CartWrapper>
    </Container>
  );
};

export default HeaderCartButton;
