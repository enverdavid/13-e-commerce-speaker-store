import React, { useContext } from "react";
import { DataContextMain } from "../context/DataContextMain";
import { ShopCartContext } from "../context/ShopCartContext";

const CardItem = ({ id, name, desc, price, img }) => {
  const { state: productState, dispatch: productDispatch } =
    useContext(DataContextMain);
  const { state: cartState, dispatch: cartDispatch } =
    useContext(ShopCartContext);

  const cartProduct = cartState.productsListCart.find((p) => p.id === id);
  const originalDataProduct = productState.products.find((p) => p.id === id);


  const handlerAddItemToCart = () => {
    // hay que disminuir el stock
    productDispatch({
      type: "DECREASE_STOCK",
      payload: id,
    });

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

  const removeCartProduct = () => {
    // Vamos a incrementar el stock de productos
    productDispatch({type: "INCREMENT_STOCK", payload: id, numItems: cartProduct.units});

    cartDispatch({type: "DELETE_PRODUCT_CART", payload: cartProduct });

  }

  const handlerRestItem = () => {

    if (cartProduct.units === 1) {
      return removeCartProduct()
    }

    // Vamos a incrementar el stock de productos
    productDispatch({type: "INCREMENT_STOCK", payload: id, numItems: 1});

    // Vamos a quitar una unidad del item en el carrito de compras
    cartDispatch({type: "DECREMENT_CART_ITEM_UNIT", payload: {id, price}});
  };

  const handlerPlusItem = () => {

    if (originalDataProduct.stock === 0) {
      return
    }

    // Vamos a decrementar una unidad del stock de productos
    productDispatch({
      type: "DECREASE_STOCK",
      payload: id,
    });


    // Vamos a añadir una unidad del item en el carrito de compras
    cartDispatch({type: "ADD_CART_ITEM_UNIT", payload: {id, price}})
  }

  return (
    <div className="w-80 h-xxl bg-white rounded-lg m-3 flex flex-col justify-between overflow-hidden shadow-2xl">
      <h2 className="pl-5 pt-5">{name}</h2>
      <img src={img} alt="imagen de un parlante" />
      <div className="flex justify-end pr-5">
        <p>Price: ${price}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        {cartProduct ? (
          <div className="w-1/2 h-full flex justify-between items-center text-purple-600 bg-white">
            <button 
              className="ml-3 text-white bg-purple-600 w-10 h-10 rounded-full"
              onClick={handlerRestItem}
            >
              -
            </button>

            <p className="w-1/3 font-bold	 text-center">{cartProduct.units}</p>

            <button 
              className="mr-3 text-white bg-purple-300 w-10 h-10 rounded-full"
              onClick={handlerPlusItem}
              >
              +
            </button>
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
