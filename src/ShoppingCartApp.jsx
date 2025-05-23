import { Navigate, Route, Routes } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import ProductsPage from "./pages/ProductsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

const ShoppingCartApp = () => {
  return (
    <>
      <NavBarComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductsPage />}></Route>
          <Route path="/cart" element={<ShoppingCartPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default ShoppingCartApp;
