import React, { useState } from "react";

const CartContext = React.createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItems: () => {},
  deleteItems: () => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addHandler = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems((cartItems) =>
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeHandler = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems((cartItems) =>
        cartItems.filter((item) => item.id !== product.id)
      );
    } else {
      setCartItems((cartItems) =>
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  const clearHandler = () => {
    setCartItems([]);
  };
  const deleteHandler = (product) => {
  
    setCartItems((cartItems) => cartItems.filter(item => item.id !==product.id))
  };

  const contextValue = {
    cartItems: cartItems,
    addItem: addHandler,
    removeItem: removeHandler,
    clearItems: clearHandler,
    deleteItems: deleteHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
