import React, { useContext, useState } from "react";
import { ShopCartContext } from "../context/ShopCartContext";

const Checkout = () => {
  const [showError, setShowError] = useState(false);
  const { state } = useContext(ShopCartContext);

  return (
    <div className="text-center">
      <div className="mb-5">
        <p className="pt-10 text-2xl font-bold">Total</p>
        <p className="text-2xl text-purple-600 font-bold">${state.totalPrice}</p>
      </div>

      <div className="flex flex-col p-7 items-center">
        <label>Credit Card Number:</label>
        <input
          placeholder="xxxx xxxx xxxx xxxx"
          className="w-72 px-4 py-2 border-solid border-4 border-purple-500 rounded-lg"
        />
      </div>

      <div className="flex flex-col p-7 items-center">
        <label>Expiration date:</label>
        <input
          placeholder="Expiration date"
          id="data-ex"
          className="w-72 px-4 py-2 border-solid border-4 border-purple-500 rounded-lg"
        />
      </div>

      <div className="flex flex-col p-7 items-center">
        <label>CVC:</label>
        <input
          placeholder="CVC"
          id="cvc"
          maxLength="3"
          className="w-72 px-4 py-2 border-solid border-4 border-purple-500 rounded-lg"
        />
      </div>

      {showError && (
        <p className="msg-error">Sorry, this page is just a demo</p>
      )}

      <div className="flex justify-center">
        <button
          className="flex text-white bg-purple-600 px-10 py-5 m-9 rounded-lg text-2xl"
          onClick={() => setShowError(true)}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export { Checkout };
