import React, { useContext } from "react";
import { DataContextMain } from "../context/DataContextMain";
import { CardItem } from "./CardItem";
import { Header } from "./Header";

const CardGrid = () => {
  const { state } = useContext(DataContextMain);

  console.log(state);

  return (
    <div >
      <Header />
      <div className="ring-4 bg-gray-300 ring-indigo-300 flex justify-center flex-wrap">
        {state.products.map((product) => (
          <CardItem
            key={product.id}
            id={product.id}
            name={product.name}
            desc={product.desc}
            price={product.price}
            stock={product.stock}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export { CardGrid };
