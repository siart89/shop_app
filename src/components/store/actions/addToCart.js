export const addToCart = (productInfo, user) => {
    return {
        type: 'ADD_TO_CART',
        payload: productInfo,
        user: user,
    };
};