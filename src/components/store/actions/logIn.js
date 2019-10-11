export const logIn = (user, password) => {
    return {
        type: 'LOG_IN',
        payload: {
            user,
            password
        }
    };
};