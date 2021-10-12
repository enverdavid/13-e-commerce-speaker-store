import React from "react";

const ListItem = ({ item }) => {


  return (
    <div className="m-4  flex bg-white p-2">
      <img
        src={item.img}
        alt="Imagen del producto"
        className="w-32 h-32 object-cover"
      />
      <div className="w-full flex flex-col justify-between">
        <p>{item.name}</p>
        <div className="w-full flex justify-between">
          <p>US ${item.price}</p>
          <div>
            <button 
              className="bg-gray-400 p-4"
            >
              -
            </button>
            <span className="px-4">0</span>
            <button className="bg-gray-400 p-4">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListItem };
