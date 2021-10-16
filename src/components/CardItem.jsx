import React from "react";
import { useCartControls } from "../hooks/useCartControls";

const CardItem = ({ id, name, desc, price, img }) => {
  const {
    cartProduct,
    handlerAddItemToCart,
    handlerRestItem,
    handlerPlusItem,
  } = useCartControls(id);

  return (
    <div className="w-80 h-xxl bg-white rounded-lg m-3 flex flex-col justify-between overflow-hidden shadow-2xl">
      <h2 className="pl-5 pt-5">{name}</h2>
      <img src={img} alt="imagen de un parlante" />
      <div className="flex justify-end pr-5">
        <p>Price: ${price}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        {cartProduct ? (
          <div className="w-full h-full flex justify-center items-center text-purple-600 bg-white">
            <button
              className="ml-3 text-white bg-purple-300 w-10 h-10 rounded-full"
              onClick={handlerRestItem}
            >
              -
            </button>

            <p className="w-1/5 font-bold	p-6 text-center">{cartProduct.units}</p>

            <button
              className="mr-3 text-white bg-purple-300 w-10 h-10 rounded-full"
              onClick={handlerPlusItem}
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="text-purple-600 bg-purple-300 p-5 w-full"
            onClick={handlerAddItemToCart}
          >
            Add to cart
          </button>
        )}

        {/* <button className="text-white bg-purple-600 p-5 w-1/2">buy</button> */}
      </div>
    </div>
  );
};

export { CardItem };
