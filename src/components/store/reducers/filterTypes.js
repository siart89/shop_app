const filterType = [
    {
        type: 'Sale',
        check: false
    },
    {
        type: 'All prices',
        check: false
    },
    {
        type: 'Less then 10 000',
        check: false
    },
    {
        type: 'Less 10 001 - 20 000',
        check: false
    },
    {
        type: 'Less 20 001 - 30 000',
        check: false
    },
    {
        type: 'More then 30 001',
        check: false
    }];

 const filterTypes = (state = filterType, action) => {
    switch (action.type) {
        case 'IS_CHECK':
            state.map(elem => {
                if (elem.type === action.payload) {
                    elem.check = true;
                    return elem;
                } else {
                    elem.check = false;
                    return elem;
                };
            });
            return state;
        default:
            return state;
    };
};
export default filterTypes;