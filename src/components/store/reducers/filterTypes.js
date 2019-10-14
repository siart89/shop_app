const filterType = [
    {
        type: 'Sale',
        check: false
    },
    {
        type: 'All prices',
        check: true,
        value: {
            start: 0,
            end: Infinity
        },
    },
    {
        type: 'Less then 10 000',
        check: false,
        value: {
            start: 0,
            end: 10000
        },
    },
    {
        type: 'Less 10 001 - 20 000',
        check: false,
        value: {
            start: 10001,
            end: 20000
        },
    },
    {
        type: 'Less 20 001 - 30 000',
        check: false,
        value: {
            start: 20001,
            end: 30000
        },
    },
    {
        type: 'More then 30 001',
        check: false,
        value: {
            start: 30001,
            end: Infinity,
        },
    }];

const filterTypes = (state = filterType, action) => {
    switch (action.type) {
        case 'IS_CHECK':
            const newState = state.slice();

            newState.map(elem => {
              elem.check = false
                if (elem.type === action.payload.type ) {
                    elem.check = action.payload.isOn;
                    return elem;
                } return elem ;
            });
            
            return newState;
        default:
            return state;
    };
};
export default filterTypes;