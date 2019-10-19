import React, { useState, useContext } from 'react';
import { Form, Input, Button } from './headerStyles/searchInputStyles';
import { AllProductsContext } from '../context/AllProductsContext';

const SearchInput = () => {
    const { ...data } = useContext(AllProductsContext);
    const [searchValue, setSearchValue] = useState('');

    const confirmSearch = (e) => {
        e.preventDefault();
        data.setSearchText(searchValue);
    };

    return (
        <Form onSubmit={confirmSearch}>
            <Input
                placeholder="Search..."
                type="text"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    data.setSearchText(e.target.value);
                }} />
            <Button>Search</Button>
        </Form>
    );
};

export default SearchInput;