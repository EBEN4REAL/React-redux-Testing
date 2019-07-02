import {createStore, applyMiddleware}  from 'redux';
import RootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

export const store = createStoreWithMiddleware(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());