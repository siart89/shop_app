export const decrementAmount = (product) => {
    return {
        type: 'DECREMENT_AMOUNT',
        payload: product
    };
};