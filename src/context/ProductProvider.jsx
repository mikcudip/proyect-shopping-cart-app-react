import { useState } from "react";
import { ProductContext } from "./ProductContext";
import Swal from "sweetalert2";
import { useEffect } from "react";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (warning) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un problema al cargar los productos",
      });
      console.error(`Algo salio mal: ${warning}`);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductProvider;
