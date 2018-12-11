import { increment, decrement, reset } from './Actions/Counter';

import Store from './Store.js';

// 打印初始状态
console.log(Store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = Store.subscribe(() =>
  console.log(Store.getState())
);

// 发起一系列 action
Store.dispatch(increment());
Store.dispatch(decrement());
Store.dispatch(reset());

// 停止监听 state 更新
unsubscribe();