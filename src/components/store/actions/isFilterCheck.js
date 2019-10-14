export const isFilterCheck = (type, isOn) => {
    return {
        type:'IS_CHECK',
        payload: {
            type,
            isOn,
        },
    };
};