import React, {useContext} from 'react';
import { AllProductsContext } from '../context/AllProductsContext';
import { ListWrapper } from './productsStyles.js/productListStyles';
import ProductItem from './ProductItem';

const ProductList = () => {
    const {data} = useContext(AllProductsContext);

    return (
        <>
            <ListWrapper>
                {data.goods.map(product => (
                    <ProductItem 
                    src={product.img}
                    title={product.title}
                    price={product.price}
                    key={product.title}
                    />
                ))}
            </ListWrapper>
        </>
    );
};

export default ProductList;