import React, { useState } from 'react';
import { Form, Input, Button } from './styles/inputFeildStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addValue } from '../store/actions';

const InputField = () => {
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
                dispatch(addValue(login, pass, users));
                setIsClicked(true);
            }}
        >
            <Input
                type="text"
                placeholder="User name"
                onChange={(e) => {
                    setLogin(e.target.value);
                    setIsClicked(false);
                }}
            />
            <Input
                type="password"
                placeholder="password"
                secondary
                onChange={(e) => {
                    setPass(e.target.value);
                    setIsClicked(false);
                }}
            />
            <Button>Log In</Button>
        </Form>
    );
};

export default InputField;