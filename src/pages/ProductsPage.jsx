import { useContext } from "react";
import CardComponent from "../components/CardComponent";
import { ProductContext } from "../context/ProductContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const ProductsPage = () => {
  const { products } = useContext(ProductContext);
  const { addProduct, removeProduct } = useContext(ShoppingCartContext);
  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map((product) => (
        <CardComponent
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handlerAdd={() => addProduct(product)}
          handlerRemove={() => removeProduct(product.id)}
        />
      ))}
    </>
  );
};

export default ProductsPage;
