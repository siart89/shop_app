export const addToCart = (productInfo) => {
    return {
        type: 'ADD_TO_CART',
        payload: productInfo
    };
};