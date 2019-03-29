import { combineReducers } from 'redux';
import firstReducer from './firstReducer';
const rootReducer = combineReducers({ firstReducer : firstReducer });

export default rootReducer;
