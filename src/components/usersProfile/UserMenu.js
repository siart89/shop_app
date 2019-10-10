import React from 'react';

const UserMenu = ({match}) => {

    console.log(match);

    return (
        <div>
            Something {match.params.logUser}
        </div>
    );
};

export default UserMenu;