export const inputFilter = (min, max) => {
    return {
        type: 'INPUT_FILTER',
        payload: {
            min,
            max
        }
    };
};