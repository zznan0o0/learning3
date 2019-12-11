import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SubSub extends Component {
  static contextTypes = {
    color: PropTypes.string,
    callback: PropTypes.func,
  }

  render() {
    console.log(this.context);
    let cb = this.context.callback;
    return (
      <button onClick = { cb.bind(this, '点击我2') }>点击我2</button>
    );
  }
}