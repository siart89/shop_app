const filterType = [
    {
        type: 'All prices',
        check: true,
        value: {
            min: 0,
            max: Infinity
        },
    },
    {
        type: 'Less then 10 000',
        check: false,
        value: {
            min: 0,
            max: 10000
        },
    },
    {
        type: '10 001 - 20 000',
        check: false,
        value: {
            min: 10001,
            max: 20000
        },
    },
    {
        type: '20 001 - 30 000',
        check: false,
        value: {
            min: 20001,
            max: 30000
        },
    },
    {
        type: 'More then 30 001',
        check: false,
        value: {
            min: 30001,
            max: Infinity,
        },
    }];

const filterTypes = (state = filterType, action) => {
    switch (action.type) {
    case 'IS_CHECK':
        const newState = state.slice();

        newState.map(elem => {
            if (elem.type === action.payload.type) {
                elem.check = action.payload.isOn;
                return elem;
            } else return elem.check = false;
        });
        return newState;
    case 'INPUT_FILTER':
        const inputState = state.slice();
        inputState.map(elem => {
            if (elem.type === 'All prices') {
                elem.value.min = action.payload.min || 0;
                elem.value.max = action.payload.max || Infinity;
                elem.check = true;
                return elem;

            } else return elem.check = false;
        });
        return inputState;
    default:
        return state;
    }
};
export default filterTypes;