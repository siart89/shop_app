import React from 'react';
import PropTypes from 'prop-types';

const UserMenu = ({match}) => {

    console.log(match);

    return (
        <div>
            Something {match.params.logUser}
        </div>
    );
};

UserMenu.propTypes = {
    match:PropTypes.object.isRequired
};

export default UserMenu;