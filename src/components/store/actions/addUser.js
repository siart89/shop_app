export const addUser = (email, login, password, ) => {
    return {
        type:'ADD_USER',
        payload: {
            email,
            login,
            password
        }
    };
};