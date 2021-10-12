import React, { useContext } from 'react'
import { ShopCartContext } from '../context/ShopCartContext';

const Checkout = () => {

    const {state} = useContext(ShopCartContext);

    return (
        <div>
            <p>Total a pagar</p>
            <p>Total Price: {state.totalPrice}</p>
        </div>
    )
}

export {Checkout};
