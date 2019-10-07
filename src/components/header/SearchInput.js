import React from 'react';
import { Form, Input, Button } from './headerStyles/searchInputStyles';

const SearchInput = () => {
    return (
        <Form>
            <Input placeholder="Search..." type="text"/>
            <Button>Search</Button>
        </Form>
    );
};

export default SearchInput;