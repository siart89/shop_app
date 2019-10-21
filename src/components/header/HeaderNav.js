import React, { useState, useEffect } from 'react';
import { Links, NavWrapper, LinksWrapper, Logo, StyledIcon, CartCount } from './headerStyles/headerNavStyles';
import SearchInput from './SearchInput';
import Catalog from './Catalog';
import { useSelector } from 'react-redux';
import UserInfo from '../logIn/UserInfo';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';
import { calcUserCartlength } from '../store/actions/calcUserCartLength';



const HeaderNav = () => {
    const users = useSelector(state => state.users);
    const cart = useSelector(state => state.cart);
    const [isLogIn, setIsLogIn] = useState(null);

    const setCurrentUserIsLogged = (arr) => {
        arr.forEach(user => {
            if (user.logged) {
                setIsLogIn(user.login);
            }
        });
    };

    useEffect(() => {
        setCurrentUserIsLogged(users);
    }, [users]);
    const UserIsExit = () => {
        setIsLogIn(null);
    };

    return (

        <NavWrapper>
            <Logo to='/'>Shop_App</Logo>
            <Catalog />
            <SearchInput />
            <LinksWrapper>
                {isLogIn ?
                    <>
                        <UserInfo
                            user={isLogIn}
                            UserIsExit={UserIsExit}
                        />
                        <Links to={`/cart/${isLogIn}`}>
                            <StyledIcon icon={shoppingCart} size={22} />
                            <CartCount>{calcUserCartlength(cart, isLogIn).length}</CartCount>
                        </Links>

                    </> :
                    <>
                        <Links to="/logIn">log in</Links>
                        <Links to="/signIn">sign in</Links>
                    </>
                }

            </LinksWrapper>
        </NavWrapper>
    );
};

export default HeaderNav;