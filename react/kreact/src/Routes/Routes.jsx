import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
//BrowserRouter HashRouter看情况使用
import Home from 'Pages/Home/Home.jsx';
import Page1 from 'Pages/Page1/Page1.jsx';
import Counter from 'Pages/Counter/Counter.jsx';
import UserInfo from 'Pages/UserInfo/UserInfo.jsx';


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
        <Route exact path="/" component={Home}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/Counter" component={Counter}/>
        <Route path="/UserInfo" component={UserInfo}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;