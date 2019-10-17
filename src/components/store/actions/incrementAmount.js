export const incrementAmount = (product) => {
    return {
        type: 'INCREMENT_AMOUNT',
        payload: product
    };
};