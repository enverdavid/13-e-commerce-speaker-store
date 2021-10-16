import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopCartContext } from "../context/ShopCartContext";
import { Icon } from "@iconify/react";

const Header = () => {
  const { state } = useContext(ShopCartContext);

  console.log(state);

  return (
    <div className="bg-gray-800 text-white h-14 flex justify-between items-center px-4 py-8">
      <Icon icon="bi:speaker-fill" className="text-2xl" />
      <p>Total: ${state.totalPrice}</p>
      <div className="flex relative">
        <Link to="/cart">
          <Icon icon="clarity:shopping-cart-solid" className="text-2xl" />
        </Link>
        {state.productsListCart.length > 0 && <p className="w-3 h-3 text-center text-xxs bg-red-500 rounded-full absolute -top-1 -right-1">
          {state.productsListCart.length}
        </p>}
      </div>
    </div>
  );
};

export { Header };
