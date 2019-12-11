import React, { Component } from 'react';
import { increment, decrement, reset } from 'Actions/Counter.js';
import { connect } from 'react-redux';

import { Button, Input  } from 'antd';
import 'antd/dist/antd.min.css';

import ChildrenPage from 'Pages/ChildrenPage/ChildrenPage.jsx';
import ValInput from 'Components/ValInput/ValInput.jsx';

import style from 'Pages/Page1/Page1.css';

class Home extends Component {
  log(){
    console.log(this)
  }

  render() {
    fetch('http://192.168.10.5:3001/cors', {method: 'POST'})
      .then(res => {
        console.log(res)
      })
      .then(r => console.log(r))
    return (
      <div>
        <ChildrenPage>
          <ValInput/>
          <div className={style["page-box"]}>当前计数为{this.props.counter.count}</div>
          <Input ref="input1"/>
          <Input ref="input2"/>
          <Button onClick={this.log.bind(this)} type="pramary">aaa</Button>
          <button onClick={() => this.props.increment()}>自增
          </button>
          <button onClick={() => this.props.decrement()}>自减
          </button>
          <button onClick={() => this.props.reset()}>重置
          </button>
        </ChildrenPage>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);