import React, { Component } from 'react';
import  "../style/detail.css";
import axios from 'axios';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      good: []
    }
    this.goback = this.goback.bind(this);
  }
  componentDidMount(){
    axios.get(`/product/skus?ids=${this.props.match.params.id}`).then((res)=>{
      console.log(res);
      this.setState({
        good: res.data.data.list[0]
      })
      console.log(this.state.good);
    })
  }
  goback(){
    this.props.history.push("/");
  }
  render() {
    if(this.state.good.shop_info){
      var i = <i >{this.state.good.shop_info.title}</i>;
      var good_img = <img src = {this.state.good.shop_info.ali_image} />;
    }
    return (
      <div id="detail">
      	<div className="top ">
          <div className="left left_detail"  onClick = {this.goback}>返回</div>
          {i}
        </div>
        <div className="nav_detail">
          <ul>
            <li>商品</li>
            <li>详情</li>
            <li>参数</li>
            <li>推荐</li>
          </ul>
        </div>
        <div className="content">
          <div className="good_img">
            {good_img}
          </div>
        </div>
        <div className="bottom_detail">
          <button >加入购物车</button>
          <button >现在购买</button>
        </div>
      </div>
    );
  }
}

