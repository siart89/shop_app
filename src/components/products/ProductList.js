import React, { useContext } from 'react';
import { AllProductsContext } from '../context/AllProductsContext';
import { ListWrapper } from './productsStyles.js/productListStyles';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const { data } = useContext(AllProductsContext);
    const filter = useSelector(state => state.filterTypes);

    const priceCompare = (arr, price, sale) => {
        let compare = false;
        arr.forEach(elem => {
            if (elem.check && elem.value) {
                if (elem.value.start <= price && price <= elem.value.end) {
                    compare = true;
                    return;
                } else return;
            } else if (elem.check && elem.type === 'Sale' && sale) {
                compare = true;
                return
            };
        });
        return compare;
    };

    return (
        <>
            <ListWrapper>
                {data.goods.map(product => {
                    if (priceCompare(filter, +product.price, product.sale)) {
                        return   <ProductItem
                            src={product.img}
                            title={product.title}
                            price={product.price}
                            key={product.title}
                        />
                    } else return '';
                   
                }
                )}
            </ListWrapper>
        </>
    );
};

export default ProductList;