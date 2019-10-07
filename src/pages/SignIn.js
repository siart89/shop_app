import React from 'react';
import { Title, Wrapper } from '../components/logIn/styles/logInFieldsStyles';
import SignInFields from '../components/signIn/SignInFields';


const SignIn = () => {

    return (
        <Wrapper>
            <Title>Sign in to Shop App</Title>
            <SignInFields />
        </Wrapper>
    );
};

export default SignIn;