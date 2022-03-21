import { createStore, applyMiddleware, compose } from 'redux';
import {RootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from "./sagas";
import thunk from 'redux-thunk';

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, saga)));
saga.run(sagaWatcher)

export default store;