import React, { useState, useEffect, useContext } from 'react';
import { Links, NavWrapper, LinksWrapper, Logo } from './headerStyles/headerNavStyles';
import SearchInput from './SearchInput';
import Catalog from './Catalog';
import { useSelector } from 'react-redux';
import UserInfo from '../logIn/UserInfo';
import { IsAuthContext } from '../context/IsAuthContext';

const HeaderNav = () => {
    const users = useSelector(state => state.users);
    const [isLogIn, setIsLogIn] = useState('admin');
    const [authStatus, setAuthStatus] = useContext(IsAuthContext);
    console.log(users);
    const setCurrentUserIsLogged = (arr) => {
        arr.forEach(user => {
            if (user.logged) {
                setIsLogIn(user.login)
            };
        });
    };
    
    useEffect(() => {
        setCurrentUserIsLogged(users)
    }, [users]);

    return (
       
        <NavWrapper>
            <Logo to='/'>Shop_App</Logo>
            <Catalog />
            <SearchInput />
            <LinksWrapper>
                {authStatus ?
                    <>
                        <UserInfo
                            user={isLogIn}
                        />
                        <Links to="/cart">Cart</Links>
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