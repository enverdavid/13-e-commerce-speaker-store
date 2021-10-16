import React, { createContext, useReducer } from "react";

const DataContextMain = createContext();

const initialState = {
    products: [
        {
            id: 1,
            name: "Sony X365",
            desc: "aaaaaaa",
            price: 150,
            stock: 20,
            img: "./products/lg.jpeg"
        }, 
        {
            id: 2,
            name: "lg02",
            desc: "bbbbbbb",
            price: 75,
            stock: 20,
            img: "./products/lg.jpeg"
        }, 
        {
            id: 3,
            name: "lg03",
            desc: "cccccccc",
            price: 100,
            stock: 20,
            img: "./products/lg.jpeg"
        }, 
        {
            id: 4,
            name: "lg04",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./products/lg.jpeg"
        },
        {
            id: 5,
            name: "lg04",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./products/lg.jpeg"
        },
        {
            id: 6,
            name: "lg04",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./products/lg.jpeg"
        },
        {
            id: 7,
            name: "lg04",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./products/lg.jpeg"
        },
        {
            id: 8,
            name: "lg04",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./products/lg.jpeg"
        },
        {
            id: 9,
            name: "lg04",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./products/lg.jpeg"
        }
    ]
}

const decrementedArr = (state, id) => {
    const productToDecrementStock = state.products.find((p) => p.id === id);
    const obj = {...productToDecrementStock};
    if (obj.stock > 0) {
        obj.stock--
    }
    return state.products.map((p) => p.id === id ? obj : p)
}

const incrementArr = (state, payload) => {
    const {id, numItems} = payload;
    const productToIncrementStock = state.products.find((p) => p.id === id);
    const obj = {...productToIncrementStock};
    obj.stock += numItems; 
    return state.products.map((p) => p.id === id ? obj : p);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "DECREASE_STOCK":
            return {
                ...state, products: decrementedArr(state, action.payload)
            }
        case "INCREMENT_STOCK":
            return {
                ...state, products: incrementArr(state, action.payload)
            }
        default:
            return state;
    }
};

// Provedor de información para los hijos
const DataProvider = ({children}) => {

    // const [data, setData] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {
        state,
        dispatch
    }

    return (
        <DataContextMain.Provider value={data}>
            {children}
        </DataContextMain.Provider>
    )
}

export {DataProvider, DataContextMain};








