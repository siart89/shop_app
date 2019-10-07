import React from 'react';
import LogInFields from '../components/logIn/LogInFields';
import { Title, Wrapper } from '../components/logIn/styles/logInFieldsStyles';



const LogIn = () => {

    return (
        <Wrapper>
            <Title>Log in to Shop App</Title>
            <LogInFields />
        </Wrapper>
    );
};

export default LogIn;
