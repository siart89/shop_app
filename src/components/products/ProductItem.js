import React, { useState, useEffect } from 'react';
import { Item, ItemImg, ItemTitle, AddCartButton } from './productsStyles.js/productListStyles';
import { ruble } from 'react-icons-kit/fa/ruble';
import Icon from 'react-icons-kit';
import { Links } from '../header/headerStyles/headerNavStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/addToCart';
import { useHistory } from 'react-router-dom';
import { removeFromCart } from '../store/actions/removeFromCart';

const ProductItem = ({ src, title, price, sale, allInfo }) => {
    const [isAdd, setIsAdd] = useState(false);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        let match = null;
        cart.forEach(elem => {
            if (elem.title === title) {
                match = true;
                return;
            } else return;
        })
        if (match) {
            setIsAdd(true)
        } else setIsAdd(false)
    }, [cart, title])


    const addProductToCart = () => {

        if (isAdd) {
            history.push('/cart')
        } else {
            dispatch(addToCart(allInfo));
        }

    };

    return (
        <Item sale={sale}>
            <ItemImg src={src} />
            <Links to={`/${title}`} color='#628fd1'>{title}</Links>
            <ItemTitle>
                <div>
                    {price}
                    <Icon icon={ruble} size={12} />
                </div>
                <AddCartButton
                    onClick={addProductToCart}
                >{isAdd ? 'Go to cart' : 'Add to cart'}
                </AddCartButton>
            </ItemTitle>
        </Item>
    );
};

export default ProductItem;