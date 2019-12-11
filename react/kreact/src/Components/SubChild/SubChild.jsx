import React, { Component } from 'react';

import SubSub from 'Components/SubChild/SubSub.jsx';

export default class SubChild extends Component {
  render() {
    let cb = this.props.callback

    return (
      <div>
        <button onClick={this.props.callback.bind(this, 'aaa')}>点击我</button>
        <SubSub/>
      </div>
    );
  }
}