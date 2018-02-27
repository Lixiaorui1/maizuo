import React, { Component } from 'react';
import BottomNav from './BottomNav';
import axios from 'axios';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import "../style/home.css";
import "../font/iconfont.css";


class Home extends Component {
  constructor (props) {
  	super (props);
  	this.state = {
  		banner_section: [],
  		list_section: [],
  		hot_goods: [],
  		active: []
  	}
  }
  componentDidMount() {
		axios.get("/marketing/mobile/index_e1b6c72ba511309a973b24e399f1b79f.json")
		.then((res)=>{
			console.log(res);
			this.setState({
				banner_section: res.data.banner.dataList,
				list_section: res.data.shortcut.dataList,
				active: res.data.floors[1].dataList
			})
		})
		axios.get("/product/skus?ids=100035101,100033802,100027303,100037603,100036302,100038001,100035202,100027004,100033913,100027401,100032501,100025101,100035101,100027305,100033802,100036304,100036501,100036401,100035705,100035101,100036003,100038001,100035202,100038101,100035803,100037801,100027004,100027303,100027101,100027401,100027004,100029001,100029801,100027501,100030901,100030701,100030501,100029701,100029601,100029501,100029301,100029201,100029101,100028901,100028801,100037711,100033907,100033303,100025101,100032901,100025602,100032401,100032701,100032501,100023001,100022901,100032601,100022201,100032201&with_stock=true&with_spu=true")
		.then((res)=>{
			console.log(res);
			this.setState({
				hot_goods: res.data.data.list.slice(0,10)
			})
		})
	}	
  render() {
    return (
      <div id="home">
      	<div className="top">
      		<div className="left iconfont">&#xe62f;</div>
      		<span></span>
      	</div>
      	<div className="content">
      		<section>
      			<div className="banner_section">
      				 <Carousel
			          autoplay={true}
			          infinite
			          selectedIndex={1}
			        >
			          {
			          	this.state.banner_section.map(function(item,index){
			          		return <img key={item.src} src={item.src}/>
			          	})
			          }
			        </Carousel>
      			</div>
      			<ul className="list_section">
      				{
      					this.state.list_section.map(function(item,index){
      						return (
      								<li key={item.src}>
      									<img src={item.src} />
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
		      							<li><img src={item.shop_info.ali_image} /></li>
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
	      	<div className="active">
	      		{
	      			this.state.active.map(function(item,index){
	      				return <img src={item.src} />
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
