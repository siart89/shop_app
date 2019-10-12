import React from 'react';
import HeaderNav from '../components/header/HeaderNav';
import HeaderImg from '../components/header/HeaderImg';
import { HeaderWrapper } from '../components/header/headerStyles/headerWrapperStyles';
const Header = () => {
    return (
            <HeaderWrapper>
                <HeaderNav />
                <HeaderImg />
            </HeaderWrapper>
    );
};

export default Header;