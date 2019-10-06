import {combineReducers} from 'redux';
import confirmValue from './confirmValue';
import authorizedUsers from './authorizedUsers';

const AllReducers = combineReducers({
    value: confirmValue,
    users: authorizedUsers,
});

export default AllReducers;


