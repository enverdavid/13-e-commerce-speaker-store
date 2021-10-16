import React from "react";
import { ListItem } from "./ListItem";
import { useContext } from "react";
import { BagHeader } from "./BagHeader";
import "../context/DataContextMain";
import { ShopCartContext } from "../context/ShopCartContext";
import { useHistory } from "react-router";

const CardList = () => {
  const { state } = useContext(ShopCartContext);
  const history = useHistory();
  // Undefined

  return (
    <div className="w-full">
      <BagHeader />

      {state.productsListCart.map((el) => (
        <ListItem key={el.id} item={el} />
      ))}

      <p className="text-center text-2xl pt-5">Total price</p>
      <p className="text-center text-purple-600 text-2xl font-bold">${state.totalPrice}</p>

      <div className="flex justify-center">
        <button
          className="flex text-white bg-purple-600 px-10 py-5 m-9 rounded-lg text-2xl"
          onClick={() => history.push("/checkout")}
        >
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export { CardList };
