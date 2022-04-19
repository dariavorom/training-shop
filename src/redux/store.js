import { createStore, applyMiddleware, compose } from 'redux';
import {RootReducer} from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from "./sagaWatcher";
import thunk from 'redux-thunk';

const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, saga)));
saga.run(sagaWatcher)
