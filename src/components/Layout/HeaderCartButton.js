import { useContext, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/CartContextProvider";

const HeaderCartButton= () => {
  const ctx = useContext(CartContext);
  const numberOfCartItems =ctx.cartItems.length ;

  const [isBump, setIsBump] = useState(false);
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
    <button className={btnClass} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
}

export default HeaderCartButton;
