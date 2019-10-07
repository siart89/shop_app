
const users = [{
    email:'admin@admim.ru',
    login: 'admin',
    password: 'admin'
}];

const authorizedUsers = (state = users, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        default: 
        return state;
    };
};

export default authorizedUsers;