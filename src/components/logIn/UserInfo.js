import React, { useState, useContext } from 'react';
import { logOut } from '../store/actions/logOut';
import { toLocalStorage } from '../store/actions/toLocalStorage';
import { useDispatch } from 'react-redux';
import { Links } from '../header/headerStyles/headerNavStyles';
import { PopUpWrapper } from './styles/popUpWrapper';
import PropTypes from 'prop-types';
import { AllProductsContext } from '../context/AllProductsContext';

const UserInfo = ({ user, UserIsExit }) => {
    const [isClick, setIsClick] = useState(false);
    const dispatch = useDispatch();
    const { ...data } = useContext(AllProductsContext);

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
                        onClick={() => {
                            dispatch(logOut());
                            dispatch(toLocalStorage());
                            UserIsExit();
                            data.setUser(false);
                        }}>
                        Exit
                    </Links>

                </PopUpWrapper>
                : ''
            }
        </div>
    );
};

UserInfo.propTypes = {
    user: PropTypes.string.isRequired,
    UserIsExit: PropTypes.func.isRequired
};

export default UserInfo;