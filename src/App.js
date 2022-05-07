import Header from "./components/Layout/Header";
import FeaturedProduct from "./components/Layout/FeaturedProduct";
import Products from "./components/Products/Products";
import { CartContextProvider } from "./Store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <FeaturedProduct />
      <Products />
    </CartContextProvider>
  );
}

export default App;
