import React from 'react';
import HeaderNav from '../components/header/HeaderNav';
import HeaderImg from '../components/header/HeaderImg';
import { HeaderWrapper } from '../components/header/headerStyles/headerWrapperStyles';
import ProductsWrapper from '../components/products/productsStyles.js/productsWrapper';
import ProductList from '../components/products/ProductList';
import ProductsFilter from '../components/products/ProductsFilter';

const Main = () => {
    return (
        <>
            <HeaderWrapper>
                <HeaderNav />
                <HeaderImg />
            </HeaderWrapper>
            <ProductsWrapper>
                <ProductsFilter />
               <ProductList />
            </ProductsWrapper>
        </>
    );
};

export default Main;