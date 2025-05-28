import { Navigate, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import ProductProvider from "./context/ProductProvider";
import ShoppingCartProvider from "./context/ShoppingCartProvider"; // 👈 asegúrate que esté bien importado

const ShoppingCartApp = () => {
  return (
    <ProductProvider>
      <ShoppingCartProvider>
        <NavBarComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </ProductProvider>
  );
};

export default ShoppingCartApp;
