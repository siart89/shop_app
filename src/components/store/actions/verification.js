
export const verification = (login, password, users) => {
    let log;
    users.forEach(user => {
        if (login === user.login && password === user.password) {
            log = true;
            return;
        } else log = false
        
    }) 
    return {
        type: 'CHECK_USER',
        payload: {
            login,
            password,
            isLogged: log
        }
    };
};