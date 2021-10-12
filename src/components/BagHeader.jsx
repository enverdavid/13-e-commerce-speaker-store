import React from "react";
import {
  Link
} from "react-router-dom";


const BagHeader = () => {
  
  return (
    <div className="bg-gray-800 text-white h-14 flex justify-between">
      <li>
        <Link to="/">back</Link>
      </li>
      <p>{`Cesta(${3})`}</p>
      <p>Borrar</p>
    </div>
  );
};

export { BagHeader };
