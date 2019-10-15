import React, { useContext } from 'react';
import { AllProductsContext } from '../context/AllProductsContext';
import { ListWrapper } from './productsStyles.js/productListStyles';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import { priceCompare } from '../store/actions/priceCompare';

const ProductList = () => {
    const { ...data } = useContext(AllProductsContext);
    const filter = useSelector(state => state.filterTypes);
   
    return (
        <>
            <ListWrapper>
                {data.data.goods.map(product => {
                    // PRICE FILTER USAGE
                    if (priceCompare(filter, +product.price)) {
                        //SALE FILTER USAGE
                        if (data.saleCheck) {
                            if (product.sale) {
                                return <ProductItem
                                    src={product.img}
                                    title={product.title}
                                    price={product.price}
                                    key={product.title}
                                    sale={product.sale}
                                />
                            } else return ''
                        } else return <ProductItem
                            src={product.img}
                            title={product.title}
                            price={product.price}
                            key={product.title}
                            sale={product.sale}
                        />
                    } else return '';

                }
                )}
            </ListWrapper>
        </>
    );
};

export default ProductList;