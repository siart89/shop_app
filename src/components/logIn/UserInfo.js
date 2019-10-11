import React, { useState } from 'react';
import { logOut } from '../store/actions/logOut';
import { toLocalStorage } from '../store/actions/toLocalStorage';
import { useDispatch } from 'react-redux';
import { Links } from '../header/headerStyles/headerNavStyles';
import { UserMenuWrapper } from './styles/userMenuWrapper';


const UserInfo = ({ user, UserIsExit }) => {
    const [isClick, setIsClick] = useState(false);
    const dispatch = useDispatch();

    return (
        <div onClick={() => setIsClick(!isClick)}>
            <Links to='' as='div'>{user}</Links>
            {isClick ?
                <UserMenuWrapper>
                    <Links to={`/user/${user}`} color='black'>{user}</Links>
                    <Links to="" color='black'>Some point</Links>
                    <Links to="" color='black'>Some point</Links>
                    <Links to="/" color='black'
                        onClick={() => { dispatch(logOut()); dispatch(toLocalStorage()); UserIsExit() }}>
                        Exit
                    </Links>

                </UserMenuWrapper>
                : ''
            }
        </div>
    );
};

export default UserInfo;