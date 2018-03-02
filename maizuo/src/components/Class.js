import React, { Component } from 'react';
import BottomNav from './BottomNav';
import "../style/class.css";
import Menu from './Menu';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';

export default class Class extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu_flag: false,
      floor: []
    }
    this.changeFlag = this.changeFlag.bind(this);
  }
  changeFlag() {
    this.setState({
        menu_flag: !this.state.menu_flag
    })
  }
  componentDidMount() {
    axios.get("/marketing/mobile/category_a0bce3afafc97a5e4c35a1468c953b71.json")
    .then((res)=>{
      console.log(res);
      var res1 = res;
      var res1L = res1.data.length;
      for(let i = 0;i < res1L;i ++){
        res1.data[i].ids = [];
        var dataListL = res1.data[i].layout.dataList.length;
        for(var j = 0;j < dataListL;j ++){
          res1.data[i].ids.push(res1.data[i].layout.dataList[j].sku)
        }
        axios.get(`product/skus?ids=${res1.data[i].ids}`)
        .then((res)=>{
          res1.data[i].list = res.data.data.list;
          console.log(res.data.data.list);
          console.log(res1.data);
          this.setState({
            floor: res1.data
          })
        })
      };
    })
  }
  render() {
    var menu = <Menu></Menu>;
    if(!this.state.menu_flag){
      menu = null;
    }

    console.log(this.state.floor);
    return (
      <div id="class">
      	<div className="top">
  		  <div className="left iconfont" onClick = {this.changeFlag}>&#xe62f;</div>
  		  <i>分类</i>
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
          {
            this.state.floor.map(function(item,index){
              return(
                <div className="floors" key={item.name}>
                  <h2>{item.name}</h2>
                  <div className="floor_img">
                    <img src={item.image.src} alt="" />
                    {
                      
                    }
                  </div>
                </div>
              )
            })
          }
      	</div>
      	<BottomNav></BottomNav>
      </div>
    );
  }
}

