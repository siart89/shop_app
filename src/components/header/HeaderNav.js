import React, { useState, useEffect } from 'react';
import { Links, NavWrapper, LinksWrapper, Logo } from './headerStyles/headerNavStyles';
import SearchInput from './SearchInput';
import Catalog from './Catalog';
import { useSelector } from 'react-redux';
import UserInfo from '../logIn/UserInfo';


const HeaderNav = () => {
    const users = useSelector(state => state.users);
    const [isLogIn, setIsLogIn] = useState(null);
    
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
    const UserIsExit =() => {
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