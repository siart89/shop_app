import React, { createContext, useState } from 'react';

export const IsAuthContext = createContext();

export const AuthStatus = (props) => {
    const [authStatus, setAuthStatus] = useState(false);
    return (
        <IsAuthContext.Provider value={[authStatus, setAuthStatus]}>
            {props.children}
        </IsAuthContext.Provider>
    );
};
