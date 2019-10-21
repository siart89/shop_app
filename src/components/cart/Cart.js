import React from 'react';
import { CartSection } from './cartStyles/cartStyles';
import { useSelector } from 'react-redux';
import CartProductItem from './CartProductItem';
import PropTypes from 'prop-types';
import { calcUserCartlength } from '../store/actions/calcUserCartLength';

const Cart = ({ match }) => {
    const cartItems = useSelector(state => state.cart);
    
    return (
        <CartSection>
            { calcUserCartlength(cartItems, match.params.user).length > 0 ? cartItems.map(item => {
                if (match.params.user === item.user) {
                    return <CartProductItem
                        title={item.title}
                        price={item.price}
                        src={item.img}
                        key={item.title}
                        amount={item.amount}
                        total={item.totalPrice}
                    />;
                } else return '';
            }) : 'Shopping cart is empty'}
        </CartSection>
    );
};

Cart.propTypes = {
    match: PropTypes.object.isRequired
};

export default Cart;