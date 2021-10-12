import React, { useContext } from "react";
import { DataContextMain } from "../context/DataContextMain";
import { ShopCartContext } from "../context/ShopCartContext";

const CardItem = ({ id, name, desc, price, img }) => {

  const { state: productState, dispatch: productDispatch } = useContext(DataContextMain);
  const { state: cartState, dispatch: cartDispatch } = useContext(ShopCartContext);

  const cartProduct = cartState.productsListCart.find((p) => p.id === id);

  const handlerAddItemToCart = () => {
    // hay que disminuir el stock
    productDispatch({
      type: "DECREASE_STOCK",
      payload: id
    })

    cartDispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: {
        id,
        name,
        desc,
        price,
        img,
        units: 1,
      },
    });
  };

  const handlerRestItem = () => {
    // Vamos a incrementar el stock de productos
    

    // Vamos a quitar una unidad de el item en el carrito de compras

  }

  return (
    <div className="w-80 h-xxl bg-white rounded-lg m-3 flex flex-col justify-between overflow-hidden shadow-2xl">
      <h2 className="pl-5 pt-5">{name}</h2>
      <img src={img} alt="imagen de un parlante" />
      <div className="flex justify-end pr-5">
        <p>Price: ${price}</p>
      </div>
      <div className="flex justify-between items-center">
        {cartProduct ? (
          <div>
            <button> - </button>
            <span>{cartProduct.units}</span>
            <button> + </button>
          </div>
        ) : (
          <button
            className="text-purple-600 bg-purple-300 p-5 w-1/2"
            onClick={handlerAddItemToCart}
          >
            add
          </button>
        )}

        <button className="text-white bg-purple-600 p-5 w-1/2">buy</button>
      </div>
    </div>
  );
};

export { CardItem };
