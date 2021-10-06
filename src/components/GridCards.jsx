import React from 'react'
import { CardItem } from './CardItem';

const GridCards = () => {
    return (
        <div className="ring-4 ring-indigo-300 flex justify-center flex-wrap">
            {/* <h2>Soy una lista de cards</h2> */}
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}

export {GridCards};
