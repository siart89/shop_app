const cart = (state = JSON.parse(localStorage.getItem('shoppingCart')) || [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, { ...action.payload, amount: 1, totalPrice: action.payload.price }];

        case 'REMOVE_FROM_CART':
            const newState = [];
            state.forEach(elem => {
                if (!(elem.title === action.payload)) {
                    newState.push(elem)
                }
            })
            return newState;
        case 'INCREMENT_AMOUNT':
            const increment = state.slice();
            increment.map(elem => {
                if (elem.title === action.payload) {
                    elem.amount += 1;
                    elem.totalPrice = elem.amount * elem.price; 
                    return elem;
                } else return elem;
            });
            return increment;

        case 'DECREMENT_AMOUNT':
            const decrement = state.slice();
            decrement.map(elem => {
                if (elem.title === action.payload && elem.amount > 0) {
                    elem.amount -= 1;
                    elem.totalPrice = elem.amount * elem.price;
                    return elem;
                } else return elem;
            });
            return decrement;

        case 'CART_TO_LOCALSTORAGE':
            localStorage.setItem('shoppingCart', JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

export default cart;