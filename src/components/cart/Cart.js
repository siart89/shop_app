import React from 'react';
import { CartSection } from './cartStyles/cartStyles';
import { useSelector } from 'react-redux';
import CartProductItem from './CartProductItem';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    
    return (
        <CartSection>
            {cartItems.length > 0 ?  cartItems.map(item => (
                <CartProductItem
                    title={item.title}
                    price={item.price}
                    src={item.img}
                    key={item.title}
                    amount={item.amount}
                    total={item.totalPrice}
                />
            )) : 'Shopping cart is empty'}
        </CartSection>
    );
};

export default Cart;