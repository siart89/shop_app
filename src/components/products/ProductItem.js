import React from 'react';
import { Item, ItemImg, ItemTitle } from './productsStyles.js/productListStyles';
import {ruble} from 'react-icons-kit/fa/ruble';
import Icon from 'react-icons-kit';
import { Links } from '../header/headerStyles/headerNavStyles';


const ProductItem = ({src, title, price, sale}) => {

    return (
        <Item sale={sale}>
            <ItemImg src={src}/>
            <Links to={`/${title}`} color='#628fd1'>{title}</Links>
            <ItemTitle>{price} 
                <Icon icon={ruble} size={12}/>
            </ItemTitle>
        </Item>
    );
};

export default ProductItem;