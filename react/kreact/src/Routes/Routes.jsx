import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Bundle from './Bundle';

//BrowserRouter HashRouter看情况使用
// import Home from 'Pages/Home/Home.jsx';
// import Page1 from 'Pages/Page1/Page1.jsx';
// import Counter from 'Pages/Counter/Counter.jsx';
// import UserInfo from 'Pages/UserInfo/UserInfo.jsx';


import Home from 'bundle-loader?lazy&name=Home!Pages/Home/Home.jsx';
import Page1 from 'bundle-loader?lazy&name=Page1!Pages/Page1/Page1.jsx';
import Counter from 'bundle-loader?lazy&name=Counter!Pages/Counter/Counter.jsx';
import UserInfo from 'bundle-loader?lazy&name=UserInfo!Pages/UserInfo/UserInfo.jsx';

const Loading = function() {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
);

const Routes = (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">首页1</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/Counter">Counter</Link></li>
        <li><Link to="/UserInfo">UserInfo</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Home)}/>
        <Route path="/page1" component={createComponent(Page1)}/>
        <Route path="/Counter" component={createComponent(Counter)}/>
        <Route path="/UserInfo" component={createComponent(UserInfo)}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;