import { useState } from "react";

const CardComponent = ({ image, title, description, price }) => {
  const [added, setAdded] = useState(false);
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
        {added ? (
          <button type="button" className="remove-buttom">
            Quitar del carrito
          </button>
        ) : (
          <button type="button" className="remove-buttom">
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
