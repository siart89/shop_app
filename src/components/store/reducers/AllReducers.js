import {combineReducers} from 'redux';
import confirmValue from './confirmValue';
import authorizedUsers from './authorizedUsers';
import filterTypes from './filterTypes';
import cart from './cart';

const AllReducers = combineReducers({
    value: confirmValue,
    users: authorizedUsers,
    filterTypes: filterTypes,
    cart: cart,
});

export default AllReducers;


