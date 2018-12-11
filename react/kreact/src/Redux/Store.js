import {createStore} from 'redux';
import combineReducers from './Reducers.js';

let Store = createStore(combineReducers);

export default Store;