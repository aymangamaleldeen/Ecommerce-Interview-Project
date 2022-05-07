import Header from "./components/Layout/Header";
import FeaturedProduct from "./components/Layout/FeaturedProduct";
import Products from "./components/Products/Products";
import { CartContextProvider } from "./Store/CartContextProvider";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  border: 4px solid red;
`;

function App() {
  return (
    <CartContextProvider>
      <Container>
        <Header />
        <FeaturedProduct />
        <Products />
      </Container>
    </CartContextProvider>
  );
}

export default App;
