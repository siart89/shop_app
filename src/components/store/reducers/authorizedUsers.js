
const users = [{
    email:'admin@admim.ru',
    login: 'admin',
    password: 'admin'
}];

const authorizedUsers = (state = JSON.parse(localStorage.getItem('users')) || users, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'TO_LOCALSTORAGE':
            localStorage.setItem('users', JSON.stringify(state));
            return state;
        case 'LOG_OUT': 
            state.map(user => {
                if (user.logged) {
                    user.logged = false;
                    return user;
                }
            }); 
            return state;
        default: 
        return state;
    };
};

export default authorizedUsers;