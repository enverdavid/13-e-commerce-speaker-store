import React, { createContext, useReducer } from "react";

const DataContextMain = createContext();

const initialState = {
    products: [
        {
            id: 2,
            name: "Apple Hompod mini",
            desc: "bbbbbbb",
            price: 100,
            stock: 20,
            img: "./imagenes/hompod_mini.jpeg"
        },
        {
            id: 7,
            name: "XBOOM Go PM5",
            desc: "ddddddddd",
            price: 125,
            stock: 20,
            img: "./imagenes/go_pm5.jpeg"
        }, 
        {
            id: 3,
            name: "Mi Smart Speaker",
            desc: "cccccccc",
            price: 45,
            stock: 20,
            img: "./imagenes/xiaomi.jpeg"
        }, 
        {
            id: 4,
            name: "JBL GO3",
            desc: "ddddddddd",
            price: 50,
            stock: 20,
            img: "./imagenes/jbl_go3.jpeg"
        },
        {
            id: 5,
            name: "Sony SRS-XG500",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./imagenes/Sony_SRS_XG500.jpeg"
        },
        {
            id: 6,
            name: "Amazon Echo Dot 4",
            desc: "ddddddddd",
            price: 50,
            stock: 20,
            img: "./imagenes/Amazon_Echo_Dot_4.jpeg"
        },
        {
            id: 8,
            name: "JBL BOOMBOX2",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./imagenes/jbl_BOOMBOX2.jpeg"
        },
        {
            id: 9,
            name: "Sony XB33",
            desc: "ddddddddd",
            price: 250,
            stock: 20,
            img: "./imagenes/sony_XB33.jpeg"
        },
        {
            id: 1,
            name: "LG XBOOM Go PL7W",
            desc: "aaaaaaa",
            price: 150,
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








