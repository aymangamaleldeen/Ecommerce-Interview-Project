import classes from "./CartItem.module.css";
import styled from "styled-components";

const ImageWrapper = styled.div`
width: 168px;
height: 92px;
`;
const Image = styled.img`
width: 100%;
height: 100%;
`



const CartItem = ({item}) => {
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.quantity}</span>
        </div>
      </div>
      <ImageWrapper>
        <Image src={item.image.src} alt={item.image.alt} />
      </ImageWrapper>
      {/* <div className={classes.actions}>
        <button onClick={item.onRemove}>−</button>
        <button onClick={item.onAdd}>+</button>
      </div> */}
    </li>
  );
};

export default CartItem;
