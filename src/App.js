import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Price from "./pages/price/Price";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/error/NotFound";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { AppProvider } from "./AppContext";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <AppProvider>
          <Routes>
            <Route path="/buoi5bt1/" element={<Home />} />
            <Route path="/buoi5bt1/products" element={<Products />} />
            <Route path="/buoi5bt1/detail/:id" element={<ProductDetail />} />
            <Route path="/buoi5bt1/price" element={<Price />} />
            <Route path="/buoi5bt1/contact" element={<Contact />} />
            <Route path="/buoi5bt1/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
