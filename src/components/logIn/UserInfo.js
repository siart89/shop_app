import React, { useState } from 'react';
import { logOut } from '../store/actions/logOut';
import { toLocalStorage } from '../store/actions/toLocalStorage';
import { useDispatch } from 'react-redux';
import { Links } from '../header/headerStyles/headerNavStyles';
import { PopUpWrapper } from './styles/popUpWrapper';


const UserInfo = ({ user, UserIsExit }) => {
    const [isClick, setIsClick] = useState(false);
    const dispatch = useDispatch();

    return (
        <div onClick={() => setIsClick(!isClick)}>
            <Links to='' as='div'>{user}</Links>
            {isClick ?
                <PopUpWrapper>
                    <Links to={`/user/${user}`} color='black'>{user}</Links>
                    <Links to="" color='black' padding>History</Links>
                    <Links to="" color='black' padding>Edit profile</Links>
                    <Links to="/" color='black'
                        padding
                        onClick={() => { dispatch(logOut()); dispatch(toLocalStorage()); UserIsExit() }}>
                        Exit
                    </Links>

                </PopUpWrapper>
                : ''
            }
        </div>
    );
};

export default UserInfo;