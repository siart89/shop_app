import React, { useState } from 'react';
import { Form, Input, Button, ErrMessage } from './styles/logInFieldsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { verification } from '../store/actions/verification';

const LogInFields = () => {
    const value = useSelector(state => state.value);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(verification(login, pass, users));
                setIsClicked(true);
            }}
        >
            {!isClicked ? '' :
                value.isLogged ? '' :
                    <ErrMessage>Wron password or login</ErrMessage>
            }
            <Input
                type="text"
                placeholder="User name"
                onChange={(e) => {
                    setLogin(e.target.value);
                    setIsClicked(false);
                }}
                required
            />
            <Input
                type="password"
                placeholder="password"
                secondary
                onChange={(e) => {
                    setPass(e.target.value);
                    setIsClicked(false);
                }}
                required
            />
            <Button>Log In</Button>
        </Form>
    );
};

export default LogInFields;