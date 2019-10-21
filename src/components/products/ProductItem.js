import React, { useState, useEffect, useContext } from 'react';
import { Item, ItemImg, ItemTitle, AddCartButton } from './productsStyles.js/productListStyles';
import { ruble } from 'react-icons-kit/fa/ruble';
import Icon from 'react-icons-kit';
import { Links } from '../header/headerStyles/headerNavStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/addToCart';
import { cartToLocalStorage } from '../store/actions/cartToLocalStorage';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AllProductsContext } from '../context/AllProductsContext';

const ProductItem = ({ src, title, price, sale, allInfo }) => {
    const [isAdd, setIsAdd] = useState(false);
    const cart = useSelector(state => state.cart);
    const allUsers = useSelector(state => state.users);
    const dispatch = useDispatch();
    const history = useHistory();
    const {...data} = useContext(AllProductsContext);

   

    useEffect(() => {
        const currentUser = () => {
            const activeUser = allUsers.find(item => item.logged);
            if (activeUser) {
                data.setUser(activeUser.login);
                return activeUser.login;
            } else {
                data.setUser(false);
                return false;
            }
            
        };
        const user = currentUser();
        // ПРОВЕРКА СООТВЕТСТВИЯ КОРЗИНА КАКОГО ПОЛЬЗОВАТЕЛЯ ЗАДЕЙСТВОВАНА

        if (cart.find(item => item.title === title && item.user === user)) {
            setIsAdd(true);
        } else setIsAdd(false);
    }, [cart, title, allUsers, data]);


    const addProductToCart = () => {
        if (isAdd) {
            history.push(`/cart/${data.user}`);
        } else {
            dispatch(addToCart(allInfo, data.user));
            dispatch(cartToLocalStorage());
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
                {data.user ?
                    <AddCartButton
                        onClick={addProductToCart}
                    >
                        {isAdd ? 'Go to cart' : 'Add to cart'}
                    </AddCartButton> :
                    ''}

            </ItemTitle>
        </Item>
    );
};

ProductItem.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sale: PropTypes.bool.isRequired,
    allInfo: PropTypes.object.isRequired

};

export default ProductItem;