import {  useContext, useState } from "react";
import Cart from "../Cart/Cart";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContextProvider";
import styled from "styled-components";


const Container = styled.div`
/* position: relative; */
`
const CartWrapper = styled.div`

`;



const HeaderCartButton= () => {
const [showCart , setShowCart] =useState(false)

  const ctx = useContext(CartContext);
  const numberOfCartItems =ctx.cartItems.length ;

  const clickHandler =()=>{
    setShowCart(!showCart);
  }

  const [isBump] = useState(false);
  let btnClass = `${classes.button} ${isBump && classes.bump}`;

  // useEffect(() => {
  //   if (ctx.items.length === 0) {
  //     return;
  //   }

  //   setIsBump(true);

  //   const timer = setTimeout(() => {
  //     setIsBump(false);
  //   }, 300);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [ctx.items]);

  return (
    <Container>
      <button className={btnClass} onClick={clickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.badge}> {numberOfCartItems} </span>
      </button>
      <CartWrapper>
       {showCart && <Cart />}
      </CartWrapper>
    </Container>
  );
}

export default HeaderCartButton;
