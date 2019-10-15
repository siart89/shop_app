import React, { createContext, useState } from 'react';
import DB from '../../db/db.json';

export const AllProductsContext = createContext();

const initialState = DB;


export const AllProductsProvider = (props) => {
    console.log(initialState)
    const [data, setData] = useState(initialState);
    const [saleCheck, setSaleCheck] = useState(false);
    return (
        <AllProductsContext.Provider value={{ data, saleCheck, setSaleCheck }}>
            {props.children}
        </AllProductsContext.Provider>

    );
};