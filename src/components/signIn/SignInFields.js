import React, { useState } from 'react';
import { Form, Input, Button, ErrMessage } from '../logIn/styles/logInFieldsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../store/actions/addUser';
import { toLocalStorage } from '../store/actions/toLocalStorage';

const SignInFields = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [currentEmail, setCurrentEmail] = useState(true);
    const [currentLogin, setCurrentLogin] = useState(true);

    const addUserOnSubmit = (e) => {
        e.preventDefault();
        if (currentEmail && currentLogin) {
            dispatch(addUser(email, login, password));
            dispatch(toLocalStorage());
        }
    };
    console.log(currentEmail, currentLogin);
    const chekUsers = (e) => {
        users.forEach(user => {
            if (user.login === login) setCurrentLogin(false);
            if (user.email === email) setCurrentEmail(false);
        });
    }
    return (
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
            <Button onClick={chekUsers}>Sign In</Button>
        </Form>
    );
};

export default SignInFields;