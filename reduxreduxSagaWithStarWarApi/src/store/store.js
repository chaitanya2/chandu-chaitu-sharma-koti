import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';
import mySaga from '../saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));


sagaMiddleware.run(mySaga)
export default store;
