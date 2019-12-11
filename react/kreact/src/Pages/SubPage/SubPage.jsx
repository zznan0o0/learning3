import React, { Component } from 'react';
import PropTypes from 'prop-types'

import SubChild from 'Components/SubChild/SubChild.jsx';

export default class SubPage extends Component {
  static childContextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func,
  }

  getChildContext() {
    return {
      color: "red",
      callback: this.callback.bind(this)
    }
  }

  callback(msg) {
    console.log(msg);
  }

  render() {
    return (
      <div>
        <SubChild callback={this.callback.bind(this)} />
      </div>
    );
  }
}