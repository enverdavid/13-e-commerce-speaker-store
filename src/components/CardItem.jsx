import React from "react";

const CardItem = () => {
  return (
    <div className="w-80 h-xxl bg-gray-500 rounded-lg m-3">
      <h2>Card title</h2>
      <img src="./imagenes/lg.jpeg" alt="imagen de un parlante" />
      <div className="flex justify-between">
        <p>icono de fav</p>
        <p>Price: $150</p>
      </div>
      <div className="flex justify-between">
        <button>add</button>
        <button>buy</button>
      </div>
    </div>
  );
};

export { CardItem };
