import React, { useState, useEffect } from 'react';
import { Form, Input, Button, ErrMessage, Title } from '../logIn/styles/logInFieldsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../store/actions/addUser';
import { toLocalStorage } from '../store/actions/toLocalStorage';
import { withRouter, useHistory } from 'react-router-dom';




const SignInFields = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [currentEmail, setCurrentEmail] = useState(true);
    const [currentLogin, setCurrentLogin] = useState(true);
    const [isLogIn, setIsLogIn] = useState(null);
    const history = useHistory();
    

    useEffect(() => {
        users.forEach(user => {
            if (user.logged) {
                setIsLogIn(user.login);
                setTimeout(() => { history.push('/') }, 2000);
            };
        });
    })

    function addUserOnSubmit(e) {
        e.preventDefault();

        if (currentEmail && currentLogin) {
            dispatch(addUser(email, login, password));
            dispatch(toLocalStorage());
        };

    };


    const checkUsers = () => {
        users.forEach(user => {
            if (user.login === login) setCurrentLogin(false);
            if (user.email === email) setCurrentEmail(false);
        });
    };


    return (
        <>
            {isLogIn ? <Title>{isLogIn} Welcome to our Shop_App</Title> :
                <>
                    <Title>Sign in to Shop App</Title>
                    <Form onSubmit={addUserOnSubmit}>
                        {currentEmail && currentLogin ? '' :
                            !currentEmail ? <ErrMessage>Email is already registered</ErrMessage> :
                                !currentLogin ? <ErrMessage>Login is already used</ErrMessage> : ''
                        }
                        <Input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setCurrentEmail(true)
                            }}
                        />
                        <Input
                            type="text"
                            placeholder="Login"
                            required
                            secondary
                            onChange={(e) => {
                                setLogin(e.target.value);
                                setCurrentLogin(true)
                            }}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            required
                            secondary
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={checkUsers}>Sign In</Button>

                    </Form>
                </>
            }

        </>
    );
};

export default withRouter(SignInFields);