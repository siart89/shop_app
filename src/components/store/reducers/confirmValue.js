const confirmValue = (state = '', action) => {
    switch (action.type) {
        case 'ADD':
            return {
                login: action.payload.login,
                password: action.payload.password,
                isLogged: action.payload.isLogged,
            }
        default:
            return state;
    };
};

export default confirmValue;