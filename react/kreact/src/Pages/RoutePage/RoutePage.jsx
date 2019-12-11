import React, {Component} from 'react';

import { IndexRoute, Route, Link } from 'react-router-dom';
import Bundle, {createComponent} from 'Routes/Bundle';

import RoutePage1 from 'bundle-loader?lazy&name=RoutePage!Pages/RoutePage/RoutePage1.jsx';
import RoutePage2 from 'bundle-loader?lazy&name=RoutePage!Pages/RoutePage/RoutePage2.jsx';




export default class RoutePage extends Component{
  render(){
    return (
      <div>
        <div>routepage</div>

       

        <div>
            <Route exact path="/RoutePage/RoutePage1" component={createComponent(RoutePage1)} />
        </div>
      </div>
    );
  }
}