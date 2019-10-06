
const users = [{
    login: 'admin',
    password: 'admin'
}];

const authorizedUsers = (state = users, action) => {
    switch (action.type) {
        default: 
        return state;
    };
};

export default authorizedUsers;