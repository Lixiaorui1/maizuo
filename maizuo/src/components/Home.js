import React, { Component } from 'react';
import BottomNav from './BottomNav';
import Menu from './Menu';
import axios from 'axios';
import { Carousel } from 'antd-mobile';
import "../style/home.css";
import "../font/iconfont.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Home extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
  		banner_section: [],
  		list_section: [],
  		hot_goods: [],
  		active: [],
  		active2: [],
  		menu_flag: false,
  		floor: [],
  		list: [],
  		hot_goods_banner: []
  	}
  	this.changeFlag = this.changeFlag.bind(this);
  	this.goto = this.goto.bind(this);
  }
    changeFlag() {
	    this.setState({
	        menu_flag: !this.state.menu_flag
	    })
	}
   componentDidMount() {
		axios.get("/marketing/mobile/index_e1b6c72ba511309a973b24e399f1b79f.json")
		.then((res)=>{
			console.log(res);
			this.setState({
				banner_section: res.data.banner.dataList,
				list_section: res.data.shortcut.dataList,
				active: res.data.floors[1].dataList,
				active2: res.data.floors[3].dataList,
				floor: res.data.floors
			})
		})
		axios.get("/product/skus?ids=100035101,100033802,100027303,100037603,100036302,100038001,100035202,100027004,100033913,100027401,100032501,100025101,100035101,100027305,100033802,100036304,100036501,100036401,100035705,100035101,100036003,100038001,100035202,100038101,100035803,100037801,100027004,100027303,100027101,100027401,100027004,100029001,100029801,100027501,100030901,100030701,100030501,100029701,100029601,100029501,100029301,100029201,100029101,100028901,100028801,100037711,100033907,100033303,100025101,100032901,100025602,100032401,100032701,100032501,100023001,100022901,100032601,100022201,100032201&with_stock=true&with_spu=true")
		.then((res)=>{
			console.log(res);
			this.setState({
				hot_goods: res.data.data.list.slice(0,10),
				list: res.data.data.list
			})
		})
	  	var that = this;
	  	setTimeout(function(){
	  		var hot_goods_banner = []
		  	var listL = that.state.list.length;
		  	var hotL = that.state.floor[2].dataList.length;
		  	for(var i = 0;i < listL;i ++){
		  		for(var j = 0;j < hotL;j ++){
		  			if(that.state.list[i].id + "" ===  that.state.floor[2].dataList[j]) {
		  				hot_goods_banner.push(that.state.list[i]);
		  			}
		  		}
		  	}
		  	console.log(hot_goods_banner);
		  	that.setState({
		  		hot_goods_banner: hot_goods_banner
		  	})
	  	},1000)
	}	
	goto(id){
		this.props.history.push("/detail/" + id);
	}
    render() {
  	var menu = <Menu></Menu>;
  	if(!this.state.menu_flag){
  		menu = null;
  	}
  	var that = this;
  	
    return (
      <div id="home">
      	<div className="top">
      		<div className="left iconfont" onClick = {this.changeFlag}>&#xe62f;</div>
      		<span></span>
      	</div>
      	<div className="content">
      		<ReactCSSTransitionGroup
          transitionName="xyz"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
      			{menu}
      		</ReactCSSTransitionGroup>
      		<section>
      			<div className="banner_section">
      				 <Carousel
			          autoplay={true}
			          infinite
			          selectedIndex={1}
			        >
			          {
			          	this.state.banner_section.map(function(item,index){
			          		return <img key={item.src} src={item.src} alt=""/>
			          	})
			          }
			        </Carousel>
      			</div>
      			<ul className="list_section">
      				{
      					this.state.list_section.map(function(item,index){
      						return (
      								<li key={item.src}>
      									<img src={item.src} alt=""/>
      									<p>{item.labelTitle}</p>
      								</li>
      							)
      					})
      				}
      			</ul>
      		</section>
      		<div className="hot">
	      		<h2>热门商品<i>&gt;</i></h2>
	      		<div className="hot_goods">
		      		{
		      			this.state.hot_goods.map(function(item,index){
		      				return (
		      						<ul key={item.id}>
		      							<li><img src={item.shop_info.ali_image} alt="" onClick={()=>that.goto(item.spu_id)}/></li>
		      							<li>
		      								<p>{item.name}</p>
		      								<p>{item.shop_info.sku_mobile_sub_title}</p>
		      								<p>￥{item.price}</p>
		      							</li>
		      						</ul>
		      					)
		      			})
		      		}
	      		</div>
	      	</div>
	      	<div className="activity">
	      		{
	      			this.state.active.map(function(item,index){
	      				return <img key={index} src={item.src} alt=""/>
	      			})
	      		}
	      	</div>
	      	<div className="hot_goods_banner">
	      		<Carousel
		          autoplay={true}
		          infinite
		        >
		          {
		          	this.state.hot_goods_banner.map(function(item,index){
	      				return (
	      					<div key= {item.shop_info.ali_image}>
		      					<img src={item.shop_info.ali_image} alt=""/>
		      					<p>{item.shop_info.sku_mobile_title}</p>
		      					<p>{item.shop_info.sku_mobile_sub_title}</p>
		      					<p>￥{item.price}</p>
	      					</div>
	      				)
	      			})
		          }
		        </Carousel>
	      	</div>
	      	<div className="activity2">
	      		{
	      			this.state.active2.map(function(item,index){
	      				return <img key={index} src={item.src} alt=""/>
	      			})
	      		}
	      	</div>
      	</div>
      	<BottomNav></BottomNav>
      </div>
    );
  }
}

export default Home;
