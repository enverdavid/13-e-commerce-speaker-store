import React from "react";

const ListItem = ({ item }) => {


  return (
    <div className="m-4 p-5 flex bg-white p-2 rounded-lg">
      <img
        src={item.img}
        alt="Imagen del producto"
        className="w-24 h-24 object-cover"
      />
      <div className="w-full flex flex-col justify-between">
        <p>{item.name}</p>
        <div className="w-full flex justify-between">
          <p>US ${item.price}</p>
          <div>
            <button 
              className="text-white bg-gray-300 w-9 h-9 rounded-full"
            >
              -
            </button>
            <span className="px-4">9</span>
            <button className="text-white bg-purple-300 w-9 h-9 rounded-full">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListItem };
