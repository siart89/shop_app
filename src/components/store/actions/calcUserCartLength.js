export const calcUserCartlength = (cartItems, user) => {
    return cartItems.filter(item => item.user === user);
};