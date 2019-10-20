import React from 'react';
import Bg from '../../main_bg.jpg';
import styled from 'styled-components';

const Img = styled.img`
    margin: 0 auto;
    max-width:100%;
    width:100%;
`;

const HeaderImg = () => {
    
    return (
        <div>
            <Img src={Bg} alt="sale"/>
        </div>
    );
};

export default HeaderImg;