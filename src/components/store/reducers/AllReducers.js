import {combineReducers} from 'redux';
import confirmValue from './confirmValue';
import authorizedUsers from './authorizedUsers';
import filterTypes from './filterTypes';

const AllReducers = combineReducers({
    value: confirmValue,
    users: authorizedUsers,
    filterTypes: filterTypes,
});

export default AllReducers;


