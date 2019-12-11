import React, {Component} from 'react';

export default class ChildrenPage extends Component{
  __log(e){
    console.log(e)
    console.log(this)
  }

  render(){
    return (
      <div>
        {this.props.children}
        <button onClick={this.__log.bind(this)}>aaa</button>
      </div>
    );
  }
}