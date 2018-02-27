import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Route,} from 'react-router-dom';
import "../style/bottom.css";
import "../font/iconfont.css";

class BottomNav extends Component {
  render() {
    return (
      	<Router>
      		<ul className="bottom_nav">
      			<li>
	      			<NavLink exact activeClassName="active" to="/">
	      				<i className="iconfont">&#xe699;</i><br/>
	      				<b>首页</b>
	      			</NavLink>
      			</li>
      			<li>
	      			<NavLink exact activeClassName="active" to="/class">
	      				<i className="iconfont">&#xe60d;</i><br/>
	      				<b>分类</b>
	      			</NavLink>
      			</li>
      			<li>
	      			<NavLink exact activeClassName="active" to="/cart">
	      				<i className="iconfont">&#xe644;</i><br/>
	      				<b>购物车</b>
	      			</NavLink>
      			</li>
      			<li>
	      			<NavLink exact activeClassName="active" to="/mine">
	      				<i className="iconfont">&#xf012d;</i><br/>
	      				<b>个人中心</b>
	      			</NavLink>
      			</li>
      		</ul>
      	</Router>
    );
  }
}

export default BottomNav;
