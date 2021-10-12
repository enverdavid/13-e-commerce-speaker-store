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
  console.log(state)

  return (
      <div className="w-full">
        <BagHeader />
        <div>
          <p>Total price: ${state.totalPrice}</p>
          <button 
            className="bg-gray-300 p-3"
            onClick={() => history.push("/checkout")}
          >
            Pagar
          </button>
        </div>
        {state.productsListCart.map((el) => <ListItem key={el.id} item={el}/>)}
      </div>
    
  );
};

export { CardList };
