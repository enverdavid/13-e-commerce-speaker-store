import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopCartContext } from "../context/ShopCartContext";


const Header = () => {

    const {state} = useContext(ShopCartContext);

    console.log(state)

    return (
        <div className="bg-gray-800 text-white h-14 flex justify-between">
            <p>Logo</p>
            <p>{state.totalPrice}</p>
            <li>
                <Link to="/cart">Carrito</Link>
            </li>

        </div>

    )
}

export {Header};