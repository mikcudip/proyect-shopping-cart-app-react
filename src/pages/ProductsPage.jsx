// min 6
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import CardComponent from "../components/CardComponent";

const ProductsPage = () => {
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
  }, [products]);
  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map((product) => (
        <CardComponent
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </>
  );
};

export default ProductsPage;
