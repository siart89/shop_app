import React, { useState } from 'react';
import { Form, Input, Button, ErrMessage } from './styles/logInFieldsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../store/actions/logIn';
import { toLocalStorage } from '../store/actions/toLocalStorage';
import { useHistory } from 'react-router-dom';



const LogInFields = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(false);

    const isCorrectUser = () => {
        users.forEach(user => {
            if (user.login === login && user.password === pass) {
                setCurrentUser(true);
                return;
            }
        });
    };

    return (
        <>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(logIn(login, pass));
                    dispatch(toLocalStorage());
                    setIsClicked(true);
                    if (currentUser) {
                        history.push('/');
                    }

                }}
            >
                {!isClicked ? '' :
                    currentUser ? '' :
                        <ErrMessage>Wrong password or login</ErrMessage>
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
                <Button onClick={isCorrectUser}>Log In</Button>
            </Form>
        </>
    );
};

export default LogInFields;