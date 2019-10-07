import React from 'react';
import { Links, NavWrapper, LinksWrapper, Logo } from './headerStyles/headerNavStyles';
import SearchInput from './SearchInput';
import Catalog from './Catalog';

const HeaderNav = () => {
    return (
        <NavWrapper>
            <Logo to='/'>Shop_App</Logo>
            <Catalog />
            <SearchInput />
            <LinksWrapper>
                <Links to="/logIn">log in</Links>
                <Links to="/signIn">sign in</Links>
            </LinksWrapper>
        </NavWrapper>
    );
};

export default HeaderNav;