import Counter from 'Reducers/Counter.js';
import UserInfo from 'Reducers/UserInfo.js';

export default function combineReducers(state = {}, action) {
  return {
    counter: Counter(state.counter, action),
    userInfo: UserInfo(state.userInfo, action)
  }
}