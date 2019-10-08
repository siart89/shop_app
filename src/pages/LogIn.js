import React from 'react';
import LogInFields from '../components/logIn/LogInFields';
import { Title, Wrapper, CloseButton, Icons } from '../components/logIn/styles/logInFieldsStyles';
import {cross} from 'react-icons-kit/icomoon/cross';



const IconClose =() => <Icons icon={cross}/>

const LogIn = () => {

    return (
        <Wrapper>
            <Title>Log in to Shop App</Title>
            <LogInFields />
            <CloseButton to="/" ><IconClose /></CloseButton>
        </Wrapper>
    );
};

export default LogIn;
