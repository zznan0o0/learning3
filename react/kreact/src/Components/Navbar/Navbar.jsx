import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">首页1</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/Counter">Counter</Link></li>
        <li><Link to="/UserInfo">UserInfo</Link></li>
      </ul>
    );
  }
}