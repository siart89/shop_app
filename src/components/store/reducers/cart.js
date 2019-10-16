const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART': 
            const newState = [];
            state.forEach(elem => {
                if (!(elem.title === action.payload)){
                    newState.push(elem)
                } 
            })
            return newState;
        default: 
        return state;
    }
};

export default cart;