import React from 'react';

import { Route, Switch } from 'react-router-dom';
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
import Page404 from 'bundle-loader?lazy&name=Page404!Pages/Page404/Page404.jsx';

const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

const Routes = (
  <Switch>
    <Route exact path="/" component={createComponent(Home)} />
    <Route path="/page1" component={createComponent(Page1)} />
    <Route path="/Counter" component={createComponent(Counter)} />
    <Route path="/UserInfo" component={createComponent(UserInfo)} />
    <Route component={createComponent(Page404)} />
  </Switch>
);

export default Routes;