import { useContext } from "react";
import { DataContextMain } from "../context/DataContextMain";
import { ShopCartContext } from "../context/ShopCartContext";

const useCartControls = (id) => {
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
        name: originalDataProduct.name,
        desc: originalDataProduct.desc,
        price: originalDataProduct.price,
        img: originalDataProduct.img,
        units: 1,
      },
    });
  };

  const removeCartProduct = () => {
    // Vamos a incrementar el stock de productos
    productDispatch({
      type: "INCREMENT_STOCK",
      payload: id,
      numItems: cartProduct.units,
    });

    cartDispatch({ type: "DELETE_PRODUCT_CART", payload: cartProduct });
  };

  const handlerRestItem = () => {
    if (cartProduct.units === 1) {
      return removeCartProduct();
    }

    // Vamos a incrementar el stock de productos
    productDispatch({ type: "INCREMENT_STOCK", payload: {id, numItems: 1} });

    // Vamos a quitar una unidad del item en el carrito de compras
    cartDispatch({ type: "DECREMENT_CART_ITEM_UNIT", payload: { id, price: originalDataProduct.price } });
  };

  const handlerPlusItem = () => {
    if (originalDataProduct.stock === 0) {
      return;
    }

    // Vamos a decrementar una unidad del stock de productos
    productDispatch({
      type: "DECREASE_STOCK",
      payload: id,
    });

    // Vamos a añadir una unidad del item en el carrito de compras
    cartDispatch({ type: "ADD_CART_ITEM_UNIT", payload: { id, price: originalDataProduct.price } });
  };

  return {
    cartProduct,
    originalDataProduct,
    handlerAddItemToCart,
    removeCartProduct,
    handlerRestItem,
    handlerPlusItem
  }

};

export { useCartControls };
