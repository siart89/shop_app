import React from 'react';
import styled from 'styled-components';
import InputField from '../components/logIn/InputField';
import { Title } from '../components/logIn/styles/inputFeildStyles';

const Wrapper = styled.div`
    height:100vh;
    width:100vw;
    background: rgba(218, 229, 242, .3);
    padding-top:200px;
`

const LogIn = () => {

    return (
        <Wrapper>
            <Title>Log in to Shop App</Title>
            <InputField />
        </Wrapper>
    );
};

export default LogIn;
