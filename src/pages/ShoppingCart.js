import React from 'react';
import { Icons, CloseButton } from '../components/logIn/styles/logInFieldsStyles';
import { cross } from 'react-icons-kit/icomoon/cross';
import HeaderNav from '../components/header/HeaderNav';
import { AppWrapper } from '../App';
import { CartWrapper } from '../components/cart/cartStyles/cartStyles';
import Cart from '../components/cart/Cart';





const IconClose = () => <Icons icon={cross} />

const ShoppingCart = () => {

    return (
        <AppWrapper>
            <HeaderNav />
            <CartWrapper>
                <Cart />

                <CloseButton to="/" ><IconClose /></CloseButton>
            </CartWrapper>
        </AppWrapper>
    );
};

export default ShoppingCart;
