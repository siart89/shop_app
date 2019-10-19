import React, { useContext } from 'react';
import { AllProductsContext } from '../context/AllProductsContext';
import { ListWrapper } from './productsStyles.js/productListStyles';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { priceCompare } from '../store/actions/priceCompare';

const ProductList = () => {
    const { ...data } = useContext(AllProductsContext);
    const filter = useSelector(state => state.filterTypes);
    const regExp = new RegExp(data.searchText, 'i');
    const usageFilters = (price, sale, img, title, product) => {
        // PRICE FILTER USAGE
        if (priceCompare(filter, +price)) {
            //SALE FILTER USAGE
            if (data.saleCheck) {
                if (sale) {
                    return <ProductItem
                        src={img}
                        title={title}
                        price={price}
                        key={title}
                        sale={sale}
                        allInfo={product}
                    />;
                } else return '';
            } else return <ProductItem
                src={img}
                title={title}
                price={price}
                key={title}
                sale={sale}
                allInfo={product}
            />;
        } else return '';
    };

    return (
        <>
            <ListWrapper>
                {data.data.goods.map(product => {
                    
                    if (regExp.test(product.title)) {
                        // USE CATEGORY FILTER
                        if (data.category === product.category) {
                            return usageFilters(product.price, product.sale, product.img, product.title, product);
                        } else if (data.category === 'Все категории') {
                            return usageFilters(product.price, product.sale, product.img, product.title, product);
                        } else return '';
                    } else return '';
                }
                )}
            </ListWrapper>
        </>
    );
};

export default ProductList;