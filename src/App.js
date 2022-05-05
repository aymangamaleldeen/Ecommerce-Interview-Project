import Header from "./components/Layout/Header"
import FeaturedProduct from "./components/Layout/FeaturedProduct"
import Products from "./components/Products/Products"
import AsideFilter from "./components/Layout/AsideFilter"
import { CartContextProvider } from "./Store/CartContextProvider";
import styled from "styled-components";


const WrapperMain = styled.main`
  width: 282px;
  height: 398px;
`;


function App() {
  return (
    <CartContextProvider>
      {/* {isVisible && <Cart onhide={hideCartHandler} />} */}
      <Header />
      <FeaturedProduct />
      <WrapperMain>
        <AsideFilter />
        <Products />
      </WrapperMain>
    </CartContextProvider>
  );
}

export default App;
