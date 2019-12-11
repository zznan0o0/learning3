import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'Redux/Middleware/Logger/Logger.js';

import combineReducers from './Reducers.js';

let Store = createStore(combineReducers, applyMiddleware(thunkMiddleware, LoggerMiddleware));

export default Store;