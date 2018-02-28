import React, { Component } from 'react';
import BottomNav from './BottomNav';
import "../style/cart.css";

export default class Cart extends Component {
  render() {
    return (
      <div id="cart">
      	<div className="top">
  		  <i>购物车</i>
      	</div>
      	<div className="content">

      	</div>
      	<BottomNav></BottomNav>
      </div>
    );
  }
}

