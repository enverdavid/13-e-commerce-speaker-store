import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-gray-800 text-white h-14 flex justify-between">
            <p>menu</p>
            <p>Logo</p>
            <li>
                  <Link to="/cart">Carrito</Link>
            </li>

        </div>

    )
}

export {Header};