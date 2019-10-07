import React, { useState } from 'react';
import { Form, Input, Button, ErrMessage } from '../logIn/styles/logInFieldsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../store/actions/addUser';

const SignInFields = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const addUserOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(email, login, password))
    } 

    console.log(users)
    return (
        <Form onSubmit={addUserOnSubmit}>
            <Input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Login"
                required
                secondary
                onChange={(e) => setLogin(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                required
                secondary
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Sign In</Button>
        </Form>
    );
};

export default SignInFields;