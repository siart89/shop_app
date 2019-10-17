import React from 'react';
import { useDispatch } from 'react-redux';
import { CartImg, CartText, ProductAmount, AmountButton, Count, RemoveButton } from './cartStyles/cartStyles';
import { removeFromCart } from '../store/actions/removeFromCart';
import { cartToLocalStorage } from '../store/actions/cartToLocalStorage';
import { incrementAmount } from './../store/actions/incrementAmount';
import { decrementAmount } from './../store/actions/decrementAmount';
const CartProductItem = ({ src, title, price, amount, total }) => {

    const dispatch = useDispatch();

    return (
        <>
            <CartImg src={src} alt={title} />
            <CartText>
                {title}
                <RemoveButton
                    onClick={() => {
                        dispatch(removeFromCart(title));
                        dispatch(cartToLocalStorage());
                    }
                    }>
                    Remove
                </RemoveButton>
            </CartText>
            <CartText>{price}</CartText>
            <ProductAmount>
                <AmountButton
                    onClick={() => {
                        dispatch(decrementAmount(title));
                        dispatch(cartToLocalStorage());
                    }
                    }
                >-</AmountButton>
                <Count>{amount}</Count>
                <AmountButton
                    onClick={() => {
                        dispatch(incrementAmount(title));
                        dispatch(cartToLocalStorage());
                    }
                    }
                >+</AmountButton>
            </ProductAmount>
            <CartText>{total}</CartText>
        </>

    );
};

export default CartProductItem;