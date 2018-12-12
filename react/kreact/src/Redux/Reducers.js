import { combineReducers } from "redux";
import Counter from 'Reducers/Counter.js';
import UserInfo from 'Reducers/UserInfo.js';

export default combineReducers({
  counter: Counter,
  userInfo: UserInfo
});