import { createContext, useReducer } from "react";

const ShopCartContext = createContext();

const initialState = {
  totalPrice: 0,
  productsListCart: [],
};

const decrementCartItem = (state, id) => {
  const productCart = state.productsListCart.find((p) => p.id === id );
  const obj = {...productCart};
  obj.units--
  return state.productsListCart.map((p) => p.id === id ? obj : p);
}

const incrementCartItem = (state, id) => {
  const productCart = state.productsListCart.find((p) => p.id === id);
  const obj = {...productCart};
  obj.units++
  return state.productsListCart.map((p) => p.id === id ? obj : p);
}

const reducer = (state, action) => {

  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        productsListCart: [...state.productsListCart, action.payload]
      };
    case "DECREMENT_CART_ITEM_UNIT":
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload.price,
        productsListCart: decrementCartItem(state, action.payload.id)
      }
    case "DELETE_PRODUCT_CART":
      return {
        ...state,
        totalPrice: state.totalPrice - (action.payload.price * action.payload.units),
        productsListCart: state.productsListCart.filter((p) => p.id !== action.payload.id)
      }
    case "ADD_CART_ITEM_UNIT":
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.price,
        productsListCart: incrementCartItem(state, action.payload.id)
      }

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
