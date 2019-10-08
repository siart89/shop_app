import React from 'react';
import { Title, Wrapper, CloseButton, Icons } from '../components/logIn/styles/logInFieldsStyles';
import SignInFields from '../components/signIn/SignInFields';
import {cross} from 'react-icons-kit/icomoon/cross';



const IconClose =() => <Icons icon={cross}/>

const SignIn = () => {

    return (
        <Wrapper>
            <Title>Sign in to Shop App</Title>
            <SignInFields />
            <CloseButton to="/" ><IconClose /></CloseButton>
        </Wrapper>
    );
};

export default SignIn;