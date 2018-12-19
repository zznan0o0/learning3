import React, { Component } from 'react';

import style from './Page1.css';

import image from 'public/images/1.jpg';
import image2 from 'public/images/2.png';
console.log(image2)

export default class Page1 extends Component {
  render() {
    return (
      <div className={style['page-box']}>
        this is Page1~
        <img src={image} alt=""/>
        <img src={image2} alt=""/>
      </div>
    )
  }
}