import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Price from "./pages/price/Price";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/error/NotFound";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
