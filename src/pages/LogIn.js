import React from 'react';
import LogInFields from '../components/logIn/LogInFields';
import { Title, Wrapper, CloseButton, Icons } from '../components/logIn/styles/logInFieldsStyles';
import {cross} from 'react-icons-kit/icomoon/cross';
import HeaderNav from '../components/header/HeaderNav';
import { AppWrapper } from '../App';




const IconClose =() => <Icons icon={cross}/>

const LogIn = () => {

    return (
        <AppWrapper>
        <HeaderNav />
        <Wrapper>
            <Title>Log in to Shop App</Title>
            <LogInFields />
            <CloseButton to="/" ><IconClose /></CloseButton>
        </Wrapper>
        </AppWrapper>
    );
};

export default LogIn;
