export const removeFromCart = (product) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: product
    };
};