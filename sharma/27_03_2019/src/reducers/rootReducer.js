import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
import { reducer as form } from 'redux-form';
const rootReducer = combineReducers({ firstReducer: firstReducer, form });

export default rootReducer;
