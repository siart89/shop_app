import React from 'react';
import { Wrapper, CloseButton, Icons } from '../components/logIn/styles/logInFieldsStyles';
import SignInFields from '../components/signIn/SignInFields';
import { cross } from 'react-icons-kit/icomoon/cross';
import HeaderNav from '../components/header/HeaderNav';
import { AppWrapper } from '../App';



const IconClose = () => <Icons icon={cross} />

const SignIn = () => {

    return (
        <AppWrapper>
            <HeaderNav />
            <Wrapper>
                <SignInFields />
                <CloseButton to="/" ><IconClose /></CloseButton>
            </Wrapper>
        </AppWrapper>
    );
};

export default SignIn;