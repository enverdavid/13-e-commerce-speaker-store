import { createContext, useReducer } from "react";

const ShopCartContext = createContext();

const initialState = {
  totalPrice: 0,
  productsListCart: [],
};

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        productsListCart: [...state.productsListCart, action.payload]
      };

    default:
      return state;
  }
};

const ShopCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const data = {
    state,
    dispatch,
  };

  return (
    <ShopCartContext.Provider value={data}>{children}</ShopCartContext.Provider>
  );
};

export { ShopCartContext, ShopCartProvider };
