import React, { Component } from 'react';

import Nav from 'components/Nav/Nav';
import Routes from 'Routes/router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        {Routes}
      </div>
    )
  }
}