import React from "react";
import { useCartControls } from "../hooks/useCartControls";
import { Icon } from '@iconify/react';


const ListItem = ({ item }) => {

  const {
    cartProduct,
    originalDataProduct,
    handlerAddItemToCart,
    removeCartProduct,
    handlerRestItem,
    handlerPlusItem
  } = useCartControls(item.id);

  return (
    <div className="m-4 p-5 flex bg-white p-2 rounded-lg">
      <img
        src={item.img}
        alt="Imagen del producto"
        className="w-24 h-24 object-cover"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="flex justify-between">
          <p>{item.name}</p>
          <Icon 
            icon="fluent:delete-dismiss-24-regular"
            className="text-2xl"
            onClick={removeCartProduct} 
          />
        </div>
        <div className="w-full flex justify-between">
          <p>US ${item.price}</p>
          <div>
            <button 
              className="text-white bg-purple-300 w-9 h-9 rounded-full"
              onClick={handlerRestItem}
            >
              -
            </button>
            <span className="px-4">{cartProduct.units}</span>
            <button 
              className="text-white bg-purple-300 w-9 h-9 rounded-full"
              onClick={handlerPlusItem}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListItem };
