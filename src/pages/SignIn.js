import React from 'react';
import { Wrapper, CloseButton, Icons } from '../components/logIn/styles/logInFieldsStyles';
import SignInFields from '../components/signIn/SignInFields';
import {cross} from 'react-icons-kit/icomoon/cross';
import HeaderNav from '../components/header/HeaderNav';



const IconClose =() => <Icons icon={cross}/>

const SignIn = () => {

    return (
        <>
        <HeaderNav />
        <Wrapper>
            <SignInFields />
            <CloseButton to="/" ><IconClose /></CloseButton>
        </Wrapper>
        </>
    );
};

export default SignIn;