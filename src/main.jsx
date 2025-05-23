import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ShoppingCartApp from "./ShoppingCartApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ShoppingCartApp />
    </StrictMode>
  </BrowserRouter>,
);
