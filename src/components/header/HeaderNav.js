import React, { useState, useEffect } from 'react';
import { Links, NavWrapper, LinksWrapper, Logo } from './headerStyles/headerNavStyles';
import SearchInput from './SearchInput';
import Catalog from './Catalog';
import { useSelector, useDispatch } from 'react-redux';
import { UserMenuWrapper } from './headerStyles/userMenuStyle';
import { logOut } from '../store/actions/logOut';
import { toLocalStorage } from '../store/actions/toLocalStorage';

const HeaderNav = () => {
    const users = useSelector(state => state.users);
    const [isLogIn, setIsLogIn] = useState(null);
    const [isInsert, setIsInsert] = useState(false);
    const dispatch = useDispatch();

    const setCurrentUserIsLogged = (arr) => {
        arr.forEach(user => {
            if (user.logged) {
                setIsLogIn(user.login)
            };
        });
    };
    
    useEffect(() => {
        setCurrentUserIsLogged(users);
    },[users])

    const handleOnClick = () => {
        setIsInsert(!isInsert);
    };
  
    return (
        <NavWrapper>
            <Logo to='/'>Shop_App</Logo>
            <Catalog />
            <SearchInput />
            <LinksWrapper>
                {isLogIn ?
                    <>
                        <div onClick={handleOnClick}>
                            <Links to='' as='div'>{isLogIn}</Links>
                            {isInsert ?
                                <UserMenuWrapper>

                                    <Links to={`/user/${isLogIn}`} color='black'>{isLogIn}</Links>
                                    <Links to="" color='black'>Some point</Links>
                                    <Links to="" color='black'>Some point</Links>
                                    <Links to="/" color='black' 
                                    onClick={() => {dispatch(logOut()); dispatch(toLocalStorage()); setIsLogIn(false)}}>Exit</Links>

                                </UserMenuWrapper>
                                : ''
                            }
                        </div>

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