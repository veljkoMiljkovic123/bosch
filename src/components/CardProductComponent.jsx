import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { saveInCartAction } from "../store/cartSlice";

function CardProductComponent({ product }) {

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(saveInCartAction(product));
  }
  return (
    <div className="w-[300px] h-[450px] border border-blue-600 text-center rounded-lg flex flex-col justify-center items-center p-2 gap-3 cursor-pointer">
      <img
        className="flex object-contain"
        src={`/${product.images[0]}`}
        alt={product.name}
        style={{ width: "200px", height: "200px" }}
      />
      <h2 className=" font-bold text-blue-600 h-[40px]">{product.name}</h2>
      <span className="text-yellow-600 font-bold">{product.price} €</span>
      <span>{product.shortDescription} </span>

    <div className="py-5 flex gap-3 items-center">
        <Link
          className="bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-yellow-600 transition-all duration-200"
          to={`/singleProduct/${product.id}`}
        >
          View Details
        </Link>
        <Link
          className="bg-yellow-600 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg text-base"
          to="/cart"
          onClick={handleAddToCart}
        >
          Add To Cart
        </Link>
      </div>
    </div>
  );
}

export default CardProductComponent;
