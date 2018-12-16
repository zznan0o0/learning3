import React, { Component } from 'react';

import './Page1.css';

import image from 'public/images/1.jpg';
import image2 from 'public/images/2.png';

export default class Page1 extends Component {
  render() {
    return (
      <div className="page-box">
        this is Page1 1~
        <img src={image} alt=""/>
        <img src={image2} alt=""/>
      </div>
    )
  }
}