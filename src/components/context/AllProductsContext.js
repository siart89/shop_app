import React, { createContext, useState } from 'react';
import DB from '../../db/db.json';


export const AllProductsContext = createContext();

const initialState = DB;


export const AllProductsProvider = (props) => {

    const [data, setData] = useState(initialState);
    const [saleCheck, setSaleCheck] = useState(false);
    const [category, setCategory] = useState('Все категории');
    const [searchText, setSearchText] = useState(new RegExp(''));
    return (
        <AllProductsContext.Provider
            value={{ data, saleCheck, setSaleCheck, category, setCategory, searchText, setSearchText }}>
            {props.children}
        </AllProductsContext.Provider>

    );
};

