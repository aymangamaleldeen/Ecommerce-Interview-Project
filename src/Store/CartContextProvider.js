import React , {useState} from "react";

const CartContext = React.createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
});


export const CartContextProvider = (props)=>{
const[cartItems,setCartItems]=useState([])
const addHandler = (product)=>{
    setCartItems();
}
const removeHandler = (product)=>{}
const clearHandler = (product)=>{}

const contextValue = {
    cartItems:cartItems,
      addItem: addHandler,
  removeItem: removeHandler,
  clearItems: clearHandler,
}

return (
  <CartContext.Provider value={contextValue}>
    {props.children}
  </CartContext.Provider>
);
}

export default CartContext;