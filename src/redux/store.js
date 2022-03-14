import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Reducer from './reducer';

const middlewares = [logger];

const store = createStore(Reducer, applyMiddleware(...middlewares));

export default store;