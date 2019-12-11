import React, { Component } from 'react';

export default class ValInput extends Component {
  render() {
    return (
      <input onChange={this.__changeEvent.bind(this)} type="text" />
    )
  }
  __changeEvent(e) {
    this.setState({inputVal: e.target.value}, function(){

      console.log(this.state)
    })
    // this.state.inputVal = _this.value;
  }
}