import counter from './Reducers/Counter.js';

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action)
  }
}