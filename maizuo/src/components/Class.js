import React, { Component } from 'react';
import BottomNav from './BottomNav';
import "../style/class.css";

export default class Class extends Component {
  render() {
    return (
      <div id="class">
      	<div className="top">
  		  <div className="left iconfont">&#xe62f;</div>
  		  <i>分类</i>
      	</div>
      	<div className="content">

      	</div>
      	<BottomNav></BottomNav>
      </div>
    );
  }
}

