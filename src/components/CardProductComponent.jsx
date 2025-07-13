import React from "react";

function CardProductComponent({ product }) {
  return (
    <div>
      <img
        src={`/${product.images[0]}`}
        alt={product.name}
        style={{ width: "200px", height: "auto" }}
      />
      <h1>{product.name}</h1>
      <h4>{product.price} €</h4>
    </div>
  );
}

export default CardProductComponent;
